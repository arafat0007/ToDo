package com.example.ToDo.Controllers;

import com.example.ToDo.Converters.TaskToTaskDTO;
import com.example.ToDo.DTOs.TaskDTO;
import com.example.ToDo.Domain.Task;
import com.example.ToDo.Domain.TaskPriority;
import com.example.ToDo.Domain.TaskStatus;
import com.example.ToDo.JWT.JwtConfig;
import com.example.ToDo.Services.TaskService;
import com.example.ToDo.Services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import javax.crypto.SecretKey;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(TaskController.class)
class TaskControllerTest {
    @InjectMocks
    TaskController taskController;

    @MockBean
    TaskService taskService;

    @Autowired
    MockMvc mockMvc;

    @MockBean
    UserService userService;
    @MockBean
    PasswordEncoder passwordEncoder;
    @MockBean
    SecretKey secretKey;
    @MockBean
    JwtConfig jwtConfig;

    @BeforeEach
    void setUp() {
    }

    @Test
    void getAllTasks() throws Exception{
        Task task = new Task();
        task.setId(1L);
        task.setTitle("Title");
        task.setDescription("Description");
        task.setTaskStatus(TaskStatus.NEW);
        task.setTaskPriority(TaskPriority.HIGH);
        task.setTag("Tag");
        task.setCreateTime(LocalDateTime.now());

        TaskToTaskDTO taskToTaskDTO = new TaskToTaskDTO();

        TaskDTO taskDTO = taskToTaskDTO.convert(task);
        List<TaskDTO> taskDTOList = Arrays.asList(taskDTO);

        Mockito.when(taskService.getAllTask()).thenReturn(taskDTOList);

//        mockMvc.perform(get("/task"))
//                .andExpect(status().isOk());
        List<TaskDTO> result = taskController.getAllTasks();

        assertEquals(result.size(), 1);

    }

    @Test
    void createTask() {
    }

    @Test
    void editTask() {
    }

    @Test
    void showTask() {
    }

    @Test
    void deleteTask() {
    }
}