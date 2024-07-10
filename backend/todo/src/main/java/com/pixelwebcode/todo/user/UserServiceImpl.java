package com.pixelwebcode.todo.user;

import com.pixelwebcode.todo.user.dtos.CreateUserDto;
import com.pixelwebcode.todo.user.dtos.UpdateUserDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Override
    public User createUser(CreateUserDto dto) {
        return null;
    }

    @Override
    public Optional<User> findUserByUsername(String username) {
        return Optional.empty();
    }

    @Override
    public List<User> findUsers() {
        return null;
    }

    @Override
    public void deleteUserByUsername(String username) {

    }

    @Override
    public User updateUser(UpdateUserDto dto) {
        return null;
    }
}
