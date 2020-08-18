package com.win.personality_quiz.controller;

import java.util.Collection;
import java.util.List;

import com.win.personality_quiz.model.Answer;

import com.win.personality_quiz.repository.AnswerRepo;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("quiz/")
@CrossOrigin(origins = "http://localhost:3000")
public class AnswerController {

    @Autowired
    private AnswerRepo answerRepo;
    

    // @GetMapping("/quiz/questions")
    // public List<Answer> getQuestions(Answer answers) {
    // return answerRepo.findByAnswers(answers);
    // }

    // // save answers into database
    @CrossOrigin(origins = "http://localhost:3000/quiz")
    @PutMapping("/answers")
    public String addAnswer(@ModelAttribute Answer answers) {
        answerRepo.save(answers);

        return "/QuizComponent.js";
    }
}
