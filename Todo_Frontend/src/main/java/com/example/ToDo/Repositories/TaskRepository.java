package com.example.ToDo.Repositories;

import com.example.ToDo.Domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
