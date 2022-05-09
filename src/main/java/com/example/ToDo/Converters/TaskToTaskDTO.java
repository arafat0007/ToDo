package com.example.ToDo.Converters;

import com.example.ToDo.Domain.Task;
import com.example.ToDo.DTOs.TaskDTO;
import lombok.Synchronized;
import org.springframework.core.convert.converter.Converter;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;

@Component
public class TaskToTaskDTO implements Converter<Task, TaskDTO> {

    @Synchronized
    @Nullable
    @Override
    public TaskDTO convert(Task source) {
        if(source == null){
            return null;
        }

        final TaskDTO taskDTO = new TaskDTO();
        //taskDTO.setId(source.getId());
        taskDTO.setTitle(source.getTitle());
        taskDTO.setDescription(source.getDescription());
        taskDTO.setTaskStatus(source.getTaskStatus());
        taskDTO.setTaskPriority(source.getTaskPriority());
        taskDTO.setTag(source.getTag());

        return taskDTO;
    }
}
