package com.example.ToDo.Services;

import com.example.ToDo.Converters.TaskToTaskDTO;
import com.example.ToDo.Domain.Task;
import com.example.ToDo.DTOs.TaskDTO;
import com.example.ToDo.Domain.User;
import com.example.ToDo.Repositories.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;
    private final UserService userService;
    private final TaskToTaskDTO taskToTaskDTO;

    @Override
    public List<TaskDTO> getAllTask(ModelMap model) {
        String loggedInUserEmail = userService.getLoggedInUserName(model);
        List<Task> taskList = userService.findUserByEmail(loggedInUserEmail).getTasks();
        List<TaskDTO> taskDTOList = taskList.stream().map(task -> taskToTaskDTO.convert(task)).collect(Collectors.toList());
        return taskDTOList;
    }

    @Override
    public TaskDTO createTask(TaskDTO taskDTO, ModelMap model) {
        if (taskDTO.getTitle().isEmpty()){
            throw new IllegalArgumentException("Title of task can not be null");
        }
        Task newTask = new Task();
        newTask.setTitle(taskDTO.getTitle());
        newTask.setDescription(taskDTO.getDescription());
        newTask.setTaskStatus(taskDTO.getTaskStatus());
        newTask.setTaskPriority(taskDTO.getTaskPriority());
        newTask.setTag(taskDTO.getTag());
        newTask.setCreateTime(LocalDateTime.now());

        String loggedInUserEmail = userService.getLoggedInUserName(model);
        User taskOwnerUser = userService.findUserByEmail(loggedInUserEmail);
        newTask.setUser(taskOwnerUser);

        taskOwnerUser.getTasks().add(newTask);
        userService.saveUser(taskOwnerUser);

        taskRepository.save(newTask);

        return taskToTaskDTO.convert(newTask);
    }

    private Task getExistingTask(long taskId, ModelMap model) {
        String loggedInUserEmail = userService.getLoggedInUserName(model);
        User taskOwnerUser = userService.findUserByEmail(loggedInUserEmail);
        Task task = taskOwnerUser.getTasks().stream().filter(t -> t.getId() == taskId).findFirst().get();
        //System.out.println("getExistingTask id "+task.getId());
        return task;
    }

    @Override
    public TaskDTO editTask(long taskId, TaskDTO taskDTO, ModelMap model) {
        Task existingTask = getExistingTask(taskId, model);
        if(existingTask == null){
            throw new IllegalArgumentException("Task not found to Show");
        }

        existingTask.setTitle(taskDTO.getTitle());
        existingTask.setDescription(taskDTO.getDescription());
        existingTask.setTaskStatus(taskDTO.getTaskStatus());
        existingTask.setTaskPriority(taskDTO.getTaskPriority());
        existingTask.setTag(taskDTO.getTag());

        taskRepository.save(existingTask);

        return taskToTaskDTO.convert(existingTask);
    }

    @Override
    public TaskDTO showTask(long taskId, ModelMap model) {
        Task existingTask = getExistingTask(taskId, model);
        if(existingTask == null){
            throw new IllegalArgumentException("Task not found to Show");
        }
        return taskToTaskDTO.convert(existingTask);
    }

    @Override
    public void deleteTask(long taskId, ModelMap model) {
        Task existingTask = getExistingTask(taskId, model);
        //System.out.println("delete task id "+existingTask.getId());

        if(existingTask == null){
            throw new IllegalArgumentException("Task not found to Show");
        }
        taskRepository.deleteById(existingTask.getId());
    }
}
