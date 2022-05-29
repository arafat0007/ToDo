package com.example.ToDo.Controllers;

import com.example.ToDo.Domain.LoginRequest;
import com.example.ToDo.Domain.RegistrationRequest;
import com.example.ToDo.JWT.JwtTokenVerifier;
import com.example.ToDo.Services.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@Api(description = "User controller is responsible for user registration and email confirmation")
@RestController
@AllArgsConstructor
public class UserController {
    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenVerifier jwtTokenVerifier;

    @ApiOperation(value = "/registration", notes = "This endpoint lets user to register.")
    @PostMapping(path = "/registration")
    public ResponseEntity<Response> UserRegister(@RequestBody RegistrationRequest request){
        Response response = userService.userRegister(request);
        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "/registration/confirm", notes = "This endpoint lets user to confirm the registered email.")
    @GetMapping(path = "/registration/confirm")
    public RedirectView confirm(@RequestParam("token") String token) {
        RedirectView redirectView = new RedirectView();

        try {
            userService.confirmToken(token);
            redirectView.setUrl("http://localhost:3000/signin");
            return redirectView;
        }
        catch (Exception e) {
            redirectView.setUrl("http://localhost:3000/error");
            return redirectView;
        }
    }

    @ApiOperation(value = "/login", notes = "This endpoint lets user to login.")
    @PostMapping(path = "/login")
    public ResponseEntity<?> UserLogin(@RequestBody LoginRequest loginRequest){

        try {
            //trying authentication with provided credentials
            Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

            //creating jwt token
            String jwtToken = jwtTokenVerifier.JwtTokenGenerator(authenticate, loginRequest.getRemember_me());

            HttpHeaders responseHeader = new HttpHeaders();
            responseHeader.add(HttpHeaders.AUTHORIZATION, jwtToken);

            return ResponseEntity.ok()
                    .headers(
                            responseHeader
            ).body("Login successful.");
        }
        catch (BadCredentialsException e){
            System.out.println("Login unsuccessful.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//            return ResponseEntity.badRequest().body("bad login");
        }
    }

    @ApiOperation(value = "/IsUserLoggedin", notes = "This endpoint checks if user is logged in or not")
    @GetMapping(path = "/IsUserLoggedin")
    public ResponseEntity<?> IsUserLoggedIn(){

        if (userService.getLoggedInUserName() == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        SecurityContextHolder.getContext().getAuthentication().setAuthenticated(false);

        HttpHeaders responseHeader = new HttpHeaders();

        return ResponseEntity.ok()
                .headers(
                        responseHeader
                ).body("User logged in.");
    }

    @ApiOperation(value = "/username", notes = "This endpoint gives logged in user first name")
    @GetMapping(path = "/username")
    public ResponseEntity<?> getUserName() {

        try {
            HttpHeaders responseHeader = new HttpHeaders();
            responseHeader.add("username", userService.getLoggedUserFirstName());

            return ResponseEntity.ok()
                    .headers(
                            responseHeader
                    ).body("user name fetch successful.");
        } catch (NullPointerException e) {
            System.out.println("No username found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
