package com.example.ToDo.Controllers;

import com.example.ToDo.Domain.RegistrationRequest;
import com.example.ToDo.Domain.Response;
import com.example.ToDo.Domain.Status;
import com.example.ToDo.JWT.JwtConfig;
import com.example.ToDo.Services.UserService;
import com.example.ToDo.Services.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import javax.crypto.SecretKey;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(UserController.class)
class UserControllerTest {
    @MockBean
    UserService userService;
    @MockBean
    PasswordEncoder passwordEncoder;
    @MockBean
    SecretKey secretKey;
    @MockBean
    JwtConfig jwtConfig;

    @Autowired
    MockMvc mockMvc;

    @BeforeEach
    void setUp() {

    }

    @DisplayName("The test checks if user is registered or not.")
    @Disabled
    public void userRegister() throws Exception{
        RegistrationRequest request = new RegistrationRequest(
                "yasin",
                "arafat",
                "yasinarafat0007@gmail.com",
                "123");
        Response response = new Response("Registration OK", Status.OK);

        Mockito.when(userService.userRegister(request)).thenReturn(response);

        //ResponseEntity<Response> responseEntity = userService.userRegister(request);
        mockMvc.perform(post("/registration")
                        .contentType("application/json"))
                .andExpect(status().isOk());
    }
}