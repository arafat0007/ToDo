package com.example.ToDo.Controllers;

import com.example.ToDo.DTOs.TaskDTO;
import com.example.ToDo.Services.TaskService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(description = "Task controller is responsible for CRUD operations of Task")
@RestController
@AllArgsConstructor
@RequestMapping("/task")
public class TaskController {
    private final TaskService taskService;

    @ApiOperation(value = "/task", notes = "This endpoint lets user to see all tasks of him/her.")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping
    public List<TaskDTO> getAllTasks(ModelMap model){
        return taskService.getAllTask(model);
    }

    @ApiOperation(value = "/task/create", notes = "This endpoint lets user to create a task.")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = "/create")
    public TaskDTO createTask(@RequestBody TaskDTO taskDTO, ModelMap model){
        return taskService.createTask(taskDTO, model);
    }

    @ApiOperation(value = "/task/{taskId}", notes = "This endpoint lets user to update an existing task.")
    @ResponseStatus(HttpStatus.OK)
    @PutMapping(path = "/{taskId}")
    public TaskDTO editTask(@PathVariable long taskId, @RequestBody TaskDTO taskDTO, ModelMap model){
        return taskService.editTask(taskId,taskDTO, model);
    }

    @ApiOperation(value = "/task/{taskId}", notes = "This endpoint lets user to display an existing task.")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping(path = "/{taskId}")
    public TaskDTO showTask(@PathVariable long taskId, ModelMap model) {
        return taskService.showTask(taskId, model);
    }

    @ApiOperation(value = "/task/{taskId}", notes = "This endpoint lets user to delete an existing task.")
    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping(path = "/{taskId}")
    public void deleteTask(@PathVariable long taskId, ModelMap model) {
        taskService.deleteTask(taskId, model);
    }
}