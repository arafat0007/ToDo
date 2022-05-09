package com.example.ToDo.Repositories;

public interface EmailSenderRepository {
    void send(String to, String email);
}
