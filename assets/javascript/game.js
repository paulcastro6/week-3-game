var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerGuess;
var lastChange = document.createElement('p');  


document.querySelector('#game').innerHTML = '<p>Please press a letter key to begin</p>';


document.onkeyup = function(event) {


var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


 
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	
if (userGuess === computerGuess) {
	
	var guessedLetters
	wins++;
	guessesLeft = 10;

} else if (userGuess !== computerGuess) {
	losses++;
	
	if (guessesLeft > 0) {
		guessesLeft--;
	}else{
		guessesLeft = 10;
	}
	

}
	document.querySelector('#game').innerHTML =
		'<p>Guess which letter I am thinking of</p>' +
	    '<p>Wins: ' + wins + '</p>' +
	    '<p>Losses: ' + losses + '</p>' +
	    '<p>Guesses Left: ' + guessesLeft + '</p>' +
	    '<p>Previous Guess: ' + userGuess + '</p>';
	  
};