package com.pixelwebcode.todo.taskList;

import com.pixelwebcode.todo.task.Task;
import com.pixelwebcode.todo.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskList {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private long id;

    private String name;
    private String description;
    private boolean done;

    @ManyToMany
    @JoinTable(
            name = "task_list_users",
            joinColumns = {
                    @JoinColumn(name = "task_list_id")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "user_id")
            }
    )
    private Set<User> users;

    @OneToMany(mappedBy = "taskList", cascade = CascadeType.ALL)
    private Set<Task> tasks;
}
