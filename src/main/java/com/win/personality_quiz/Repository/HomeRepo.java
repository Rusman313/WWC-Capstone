package com.win.personality_quiz.Repository;

import java.util.List;

import com.win.personality_quiz.Model.Home;

import org.springframework.data.repository.CrudRepository;

public interface HomeRepo extends CrudRepository<Home, Long> {
    List<Home> findByUserName(String username);
}