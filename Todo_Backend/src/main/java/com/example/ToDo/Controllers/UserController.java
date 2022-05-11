package com.example.ToDo.Controllers;

import com.example.ToDo.Domain.RegistrationRequest;
import com.example.ToDo.Services.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@Api(description = "User controller is responsible for user registration and email confirmation")
@RestController
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    @ApiOperation(value = "/registration", notes = "This endpoint lets user to register.")
    @PostMapping(path = "/registration")
    public String UserRegister(@RequestBody RegistrationRequest request){
        return userService.userRegister(request);
    }

    @ApiOperation(value = "/registration/confirm", notes = "This endpoint lets user to confirm the registered email.")
    @GetMapping(path = "/registration/confirm")
    public String confirm(@RequestParam("token") String token) {
        return userService.confirmToken(token);
    }
}
