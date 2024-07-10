package com.pixelwebcode.todo.user.errors;

public class UserNotFoundException extends Exception{
    public UserNotFoundException(String message) {
        super(message);
    }

    public UserNotFoundException() {
        super("User with this username doesn't exist");
    }
}
