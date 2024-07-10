package com.pixelwebcode.todo.user;

import com.pixelwebcode.todo.user.dtos.CreateUserDto;
import com.pixelwebcode.todo.user.dtos.UpdateUserDto;
import com.pixelwebcode.todo.user.errors.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository repository;
    @Override
    public User createUser(CreateUserDto dto) {
        var user = User
                .builder()
                .email(dto.email())
                .username(dto.username())
                .password(dto.password())
                .taskLists(new HashSet<>())
                .build();
        return repository.save(user);
    }

    @Override
    public Optional<User> findUserByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public List<User> findUsers() {
        return repository.findAll();
    }

    @Override
    public void deleteUserByUsername(String username) {
        repository.deleteByUsername(username);
    }

    @Override
    public User updateUser(String username, UpdateUserDto dto) throws UserNotFoundException {
        var user = repository.findByUsername(username).orElseThrow(UserNotFoundException::new);
        if(!username.equals(dto.username())){
            user.setUsername(dto.username());
        }
        if(!user.getEmail().equals(dto.email())){
            user.setEmail(dto.email());
        }
        if(!user.getPassword().equals(dto.password())){
            user.setPassword(dto.password());
        }
        return user;
    };
}
