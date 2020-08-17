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
		this.quizRepo.save(new Quiz("What Is Your Preferred Halloween Costume?", "None, I'm lame", "Skeleton",
				"George of the Jungle", "A group costume with friends", "Cow"));
		this.quizRepo.save(new Quiz("What Quality Is Most Attractive to You?", "Sense of humor", "Intelligence",
				"Thoughtfulness", "Great communication skills", "People who are unapologetically themselves"));
		this.quizRepo.save(new Quiz("What Is Your Karaoke Song?", "Mr. Brightside - The Killers",
				"Total Eclipse of The Heart - Bonnie Tyler", "Summer Lovin' - Grease", "Fat Lip - Sum 41",
				"Cheeseburger in Paradise - Jimmy Buffett"));
		this.quizRepo.save(new Quiz("How Do You Celebrate Your Birthday?", "Dinner out", "Eating",
				"A vacation with my significant other", "A party with close friends and family", "With close friends"));
		this.quizRepo.save(new Quiz("What Is Your Biggest Pet Peeve?", "Lack of empathy",
				"Not following through with something", "Intentional ignorance", "Dirty dishes piling up in the sink",
				"When I catch myself not being brave, honest, or courageous"));
		this.quizRepo.save(new Quiz("If You Could Live Anywhere, Where Would It Be?", "Pacific Northwest",
				"Manhattan, NY", "Charlotte, NC", "Lima, Peru", "I'm happy with where I am and what I have"));
		this.quizRepo.save(new Quiz("What could you eat A LOT of?", "Potato chips", "Watermelon", "Pizza",
				"Chicken Pad Thai", "Ice cream"));
		this.quizRepo.save(
				new Quiz("Pick a Fictional Hangout Spot", "Hogwarts, Harry Potter", "Jellyfish Fields, Sponge Bob",
						"MacLaren's Pub, HIMYM", "The Honker Burger, Doug", "Anywhere with the Parks and Rec group"));
		this.quizRepo.save(new Quiz("Danger's Afoot. No Time To Wait For Backup. What Do You Do?", "Call a friend",
				"Pick a hiding spot and observe the situation from a distance", "Evacuate!",
				"Grab a first-aid-kit, cellphone, and a knife. You never know what kind of danger you're walking into",
				"Assess the situation and discern the most appropriate reaction"));
		this.quizRepo.save(new Quiz("You Can Only Use One Social Network For the Rest of Your Life! What Is It?",
				"Twitter", "Stack Overflow", "Reddit", "The one I create on my own",
				"I don't really care about social media"));
		this.quizRepo.save(new Quiz("A Tornado Is Coming, Now What?", "Grab my kid, hide in bathtub",
				"Look up what to do during a tornado ", "Stay away from the windows",
				"Grab the animals, gallons of water, a cell phone, flashlight, and go to the safest place in the house",
				"Find safety and call my loved ones to make sure they're okay"));
		this.quizRepo.save(new Quiz("What Would Make You Happiest On a Work Day?", "Go Home",
				"Working on a project I feel passionate about", "Completing a project", "Cute animal pictures",
				"A team effort resulting in a positive outcome"));
		this.quizRepo.save(new Quiz("What's Your Motto to Live By?", "Work to live, don't live to work",
				"Do the best with what you have", "Keep on keeping on", "The only constant is change",
				"Help others without expecting to receive"));
	}

}