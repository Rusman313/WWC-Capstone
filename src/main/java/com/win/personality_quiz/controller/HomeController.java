package com.win.personality_quiz.controller;

import com.win.personality_quiz.model.Home;
import com.win.personality_quiz.repository.HomeRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @Autowired
    private HomeRepo homerepo;

    @RequestMapping("")
    public String index() {

        return "index.html";
    }

    // request for add user
    @RequestMapping("/addUser")
    public String addUser(Home home) {
        homerepo.save(home);
        return "index.html";
    }
}