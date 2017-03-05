// Javascript function 
$(document).ready(function() {

	// variables
	var winCounter = 0;
	var lossCounter = 0;
	var userScore = 0;
	var targetScore = 0;
	var sapphireNumber = 0;
	var rubyNumber = 0;
	var emeraldNumber = 0;
	var amethystNumber = 0;


	// start function
	function startGame (){
		// reset scores and targets to 0 and display user Score to user to user
		userScore = 0;
		$(".userScore").text(userScore);
		targetScore = 0;

		//the targetScore is randomly generated between 19-120 and displayed 
		targetScore = Math.round(Math.random() * 101 + 19);
		$(".targetScore").text(targetScore);

		// Crystals are randomly assigned a value between 1-12
		sapphireNumber = Math.round(Math.random() * 11 + 1);
		rubyNumber = Math.round(Math.random() * 11 + 1);
		emeraldNumber = Math.round(Math.random() * 11 + 1);
		amethystNumber = Math.round(Math.random() * 11 + 1); 
		
		// Prevent repeated values in the crystals		
		while(sapphireNumber === rubyNumber){
			rubyNumber = Math.round(Math.random() * 11 + 1);
		} 

		while(emeraldNumber === sapphireNumber || emeraldNumber === rubyNumber){
			emeraldNumber = Math.round(Math.random() * 11 + 1);
		} 
		while(amethystNumber === sapphireNumber || amethystNumber === rubyNumber || amethystNumber === emeraldNumber){
			amethystNumber = Math.round(Math.random() * 11 + 1);
		};
		console.log(sapphireNumber);
		console.log(rubyNumber);
		console.log(emeraldNumber);
		console.log(amethystNumber);

	};

	// Call startGame Function
	startGame();


	// Click Functions
		// 1. When clicked, increase by amount determined at start and display to user
		// 2. Check to see if they have met the criteria for ending the game

	// Sapphire Button
	$(".sapphire").on("click", function(){
		userScore += sapphireNumber;
		$(".userScore").text(userScore);
		gameOver();
	});

	// Ruby Button
	$(".ruby").on("click", function(){
		userScore += rubyNumber;
		$(".userScore").text(userScore);
		gameOver();
	});

	// Emerald Button
	$(".emerald").on("click", function(){
		userScore += emeraldNumber;
		$(".userScore").text(userScore);
		gameOver();
	});

	// Amethyst Button
	$(".amethyst").on("click", function(){
		userScore += amethystNumber;
		$(".userScore").text(userScore);
		gameOver();
	});

	// gameover function
	function gameOver(){
		
		// Determine if they win, increase the counter, display win message and win count, and set up new game
		if (userScore === targetScore) {
			winCounter++;
			$(".winCounter").text(winCounter);
			$(".message").html("You Won! Click a crystal to play again.");
			startGame();
		}
		// Determine if they lost, increase loss counter, display loss message and count, and set up new game
		else if (userScore >= targetScore){
			lossCounter++;
			$(".lossCounter").text(lossCounter);
			$(".message").html("You Lost! Click a crystal to try again.");
			startGame();
		} 

		// Display encouraging message/instruction until an if is met
		else {
			$(".message").text("Keep Clicking!");
		}

	};

});