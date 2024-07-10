package com.pixelwebcode.todo.task;

import com.pixelwebcode.todo.taskList.TaskList;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private boolean done;
    private LocalDate expired;

    @ManyToOne(fetch = FetchType.LAZY)
    private TaskList taskList;
}
