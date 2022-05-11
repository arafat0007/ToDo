package com.example.ToDo.Services;

import com.example.ToDo.DTOs.TaskDTO;
import org.springframework.ui.ModelMap;
import java.util.List;

public interface TaskService {
    public List<TaskDTO> getAllTask(ModelMap model);
    public TaskDTO createTask(TaskDTO taskDTO, ModelMap model);

    public TaskDTO editTask(long taskId, TaskDTO taskDTO, ModelMap model);

    public TaskDTO showTask(long taskId, ModelMap model);

    public void deleteTask(long taskId, ModelMap model);
}
