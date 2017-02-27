// variables
var winCounter = 0;
var lossCounter = 0;
var userScore = 0;
var targetScore = 0;


// start function
	//userScore resets to 0
	//jewels are randomly assigned a value (need an array and math.random())
	//the targetScore is randomly generated and displayed (need math.random() and getElementById)

// clicking functions .on ("click",)
	// button clicked needs to add to the userScore by amount assigned at the beginning of the game
	// increase in userScore needs to be displayed (userScore +=)

// gameover function
	// if userScore === targetScore, "You Win!" is displayed
		// winCounter++
	// else userScore >= targetScore, "You Lose" is displayed
		// lossCounter++
	// call start function to restart game without refresh
// call start function