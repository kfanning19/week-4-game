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
		// reset scores and targets to 0 and display to user
		userScore = 0;
		$(".userScore").text(userScore);
		targetScore = 0;

		//the targetScore is randomly generated and displayed 
		targetScore = Math.round(Math.random() * 101 + 19);
		$(".targetScore").text(targetScore);

		// remove contents of .message
		// $(".message").text("");

		//jewels are randomly assigned a value (need an array and math.random())
		sapphireNumber = Math.round(Math.random() * 12 + 1);
		rubyNumber = Math.round(Math.random() * 12 + 1);
		emeraldNumber = Math.round(Math.random() * 12 + 1);
		amethystNumber = Math.round(Math.random() * 12 + 1); 
		
		//the targetScore is randomly generated and displayed (need math.random() and getElementById)
			
	};
	startGame();
	console.log(targetScore);

	// clicking functions .on ("click",)
		// button clicked needs to add to the userScore by amount assigned at the beginning of the game
		// increase in userScore needs to be displayed (userScore +=)
		$(".sapphire").on("click", function(){
			userScore += sapphireNumber;
			$(".userScore").text(userScore);
			gameOver();
		});
		$(".ruby").on("click", function(){
			userScore += rubyNumber;
			$(".userScore").text(userScore);
			gameOver();
		});
		$(".emerald").on("click", function(){
			userScore += emeraldNumber;
			$(".userScore").text(userScore);
			gameOver();
		});
		$(".amethyst").on("click", function(){
			userScore += amethystNumber;
			$(".userScore").text(userScore);
			gameOver();
		});
	
	// gameover function
	function gameOver(){
		// if userScore === targetScore, "You Win!" is displayed
			// winCounter++
		if (userScore === targetScore) {
			winCounter++;
			$(".winCounter").text(winCounter);
			$(".message").text("You Win!");
			startGame();
		}
		// else userScore >= targetScore, "You Lose" is displayed
			// lossCounter++
		else if (userScore >= targetScore){
			lossCounter++;
			$(".lossCounter").text(lossCounter);
			$(".message").text("You Lose!");
			
		// call start function to restart game without refresh
			startGame();
		} 
		else if (userScore < targetScore){
			$(".message").text("Keep Clicking!");
		}

	};

});