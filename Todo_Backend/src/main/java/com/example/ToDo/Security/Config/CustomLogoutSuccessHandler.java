package com.example.ToDo.Security.Config;

import com.example.ToDo.Services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@AllArgsConstructor
public class CustomLogoutSuccessHandler extends
        SimpleUrlLogoutSuccessHandler implements LogoutSuccessHandler {

    private UserService userService;

    @Override
    public void onLogoutSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication)
            throws IOException, ServletException {

        //As user is logging out, we make isLoggedIn to false
        System.out.println("LOGOUT   "+request);
        System.out.println("LOGOUT   "+response);
        System.out.println("LOGOUT   "+authentication);
        //userService.setIsLoggedIn(authentication.getPrincipal().toString(),false);

        System.out.println("%%%%user er auth null korsi");
    }
}
