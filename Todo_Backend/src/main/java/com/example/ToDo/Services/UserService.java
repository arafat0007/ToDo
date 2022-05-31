package com.example.ToDo.Services;

import com.example.ToDo.Domain.Response;
import com.example.ToDo.Domain.RegistrationRequest;
import com.example.ToDo.Domain.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    public Response userRegister(RegistrationRequest request);
    public String confirmToken(String token);
    public String getLoggedInUserName();

    public User findUserByEmail(String loggedInUserEmail);

    public void saveUser(User user);

    public String getLoggedUserFirstName();
}
