package com.example.ToDo.Domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    @NonNull
    @ApiModelProperty(required = true, value = "User's firstName")
    private final String firstName;
    @NonNull
    @ApiModelProperty(required = true, value = "User's lastName")
    private final String lastName;
    @NonNull
    @ApiModelProperty(required = true, value = "User's email")
    private final String email;
    @NonNull
    @ApiModelProperty(required = true, value = "User's password")
    private final String password;
}
