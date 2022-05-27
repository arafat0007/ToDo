package com.example.ToDo.Services;

import com.example.ToDo.Controllers.Response;
import com.example.ToDo.Domain.RegistrationRequest;
import com.example.ToDo.Domain.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.ui.ModelMap;

public interface UserService extends UserDetailsService {
    public Response userRegister(RegistrationRequest request);
    public String confirmToken(String token);
    public String getLoggedInUserName();

    public User findUserByEmail(String loggedInUserEmail);

    public void saveUser(User user);

    void setIsLoggedIn(String email,boolean b);
}
