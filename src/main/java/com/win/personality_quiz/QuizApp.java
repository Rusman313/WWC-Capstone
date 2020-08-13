package com.win.personality_quiz;

import com.win.personality_quiz.model.Quiz;
import com.win.personality_quiz.repository.QuizRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QuizApp implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(QuizApp.class, args);
	}

	@Autowired
	private QuizRepo quizRepo;

	@Override
	public void run(String... args) throws Exception {
		this.quizRepo.save(new Quiz("Are you ready for a raise?"));
	}

}