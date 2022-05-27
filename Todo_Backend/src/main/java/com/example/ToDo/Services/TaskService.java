package com.example.ToDo.Services;

import com.example.ToDo.DTOs.TaskDTO;
import org.springframework.ui.ModelMap;
import java.util.List;

public interface TaskService {
    public List<TaskDTO> getAllTask();
    public TaskDTO createTask(TaskDTO taskDTO );

    public TaskDTO editTask(long taskId, TaskDTO taskDTO );

    public TaskDTO showTask(long taskId );

    public void deleteTask(long taskId );
}
