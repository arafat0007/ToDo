package com.example.ToDo.DTOs;

import com.example.ToDo.Domain.TaskPriority;
import com.example.ToDo.Domain.TaskStatus;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class TaskDTO {
    @NonNull
    @ApiModelProperty(required = true, value = "Id of a task")
    private long id;
    @NonNull
    @ApiModelProperty(required = true, value = "Title of a task")
    private String title;
    @ApiModelProperty(value = "Description of a task")
    private String description;
    @ApiModelProperty(value = "Task Status of a task")
    private TaskStatus taskStatus;
    @ApiModelProperty(value = "Task Priority of a task")
    private TaskPriority taskPriority;
    @ApiModelProperty(value = "Tag of a task")
    private String Tag;
    @ApiModelProperty(value = "create time of a task")
    private LocalDateTime createTime;
}
