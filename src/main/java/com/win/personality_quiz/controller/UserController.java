package com.win.personality_quiz.controller;

import java.util.Collection;

import com.win.personality_quiz.model.User;
import com.win.personality_quiz.repository.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("user/")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @GetMapping("names")
    public Collection<User> getUserNames() {

        return (Collection<User>) userRepo.findAll();
    }

    // @PostMapping("names")
    // public void createUserNames(@RequestBody User userName) {
    // userRepo.save(userName);
    // }

    // save username into database
    // @CrossOrigin(origins = "http://localhost:3000")
    // @RequestMapping("addUser")
    // public String addUser(User user) {
    // userRepo.save(user);
    // return "UserComponent";
    // }

    // post username
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("names")
    public String getUser(@ModelAttribute("user") User user) {
        userRepo.save(user);
        return "UserComponent";
    }

}
