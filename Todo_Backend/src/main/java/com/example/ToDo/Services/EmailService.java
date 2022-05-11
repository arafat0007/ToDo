package com.example.ToDo.Services;

import com.example.ToDo.Repositories.EmailSenderRepository;

import java.util.function.Predicate;

public interface EmailService extends EmailSenderRepository, Predicate<String> {
}
