package com.pixelwebcode.todo.user;

import com.pixelwebcode.todo.user.dtos.CreateUserDto;
import com.pixelwebcode.todo.user.dtos.UpdateUserDto;
import com.pixelwebcode.todo.user.errors.UserNotFoundException;

import java.util.List;
import java.util.Optional;

public interface UserService {
     User createUser(CreateUserDto dto);
     Optional<User> findUserByUsername(String username);
     List<User> findUsers();
     void deleteUserByUsername(String username);
     User updateUser(String username, UpdateUserDto dto) throws UserNotFoundException;
}
