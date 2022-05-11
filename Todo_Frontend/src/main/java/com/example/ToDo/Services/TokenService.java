package com.example.ToDo.Services;

import com.example.ToDo.Domain.Token;

import java.util.Optional;

public interface TokenService {
    public Optional<Token> findByToken(String token);
    public void saveToken(Token token);
    public void UpdateToken(Token confirmToken);
}
