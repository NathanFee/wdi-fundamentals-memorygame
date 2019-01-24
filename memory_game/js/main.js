
var countWins = 0;
var countLoses = 0;

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",	
}
];

var cardsInPlay =[];

var printScore = function()
{
	document.getElementById('scoreKeeper').textContent = "Wins: " + countWins + " Loses: " + countLoses;
	console.log("Wins: " + countWins + " Loses: " + countLoses);
}

var checkForMatch = function()
{

	if (cardsInPlay.length === 2)
	{
		if (cardsInPlay[0] === cardsInPlay[1])
		{
			//setTimeout(function() {alert("You found a match!.");}, 200);
			document.getElementById('alertResult').textContent = winResponse();
			countWins++;
			printScore();

		}
		else
		{
			//setTimeout(function() {alert("Sorry, try again.");}, 200);
			document.getElementById('alertResult').textContent = "Sorry, Try Agiain.";
			countLoses++;
			printScore();
		}
	}
} // End checkForMatch()


var flipCard = function ()
{
	var cardId = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardId].rank + ".");
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	checkForMatch();
	
} // End flipCard()


var createBoard = function()
{
	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    var boardLocation = document.getElementById('game-board');
    boardLocation.appendChild(cardElement);
}

} // End createBoard()


var winResponse = function()
{
var responseIndex = Math.floor(Math.random()* 4);

switch (responseIndex){
	case 0:
		return "Congratulations! You found a match!";
		break;
	case 1:
		return "Awesome! A match has been found! ";
		break;
	case 2:
		return "YAY! A Match!";
		break;
	case 3:
		return  "#Winning";
		break;
	default:
		return  "#NotWinning";
	}

}// End winResponse()


/*
	The following shuffle function is known as the Fisher-Yates (aka Knuth) Shuffle.
	Code Source: 
	https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/

var shuffle = function (array) 
{
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) 
  {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

}// End Shuffle()



var resetBoard = function(){
console.log("Reset Button Clicked");
	
var boardNode = document.getElementById('game-board');
	while (boardNode.firstChild) 
	{
		boardNode.removeChild(boardNode.firstChild);
	}
	cardsInPlay = [];
	cards = shuffle(cards);
	createBoard();

}// End resetBoard()

var newGame = function ()
{
	countWins = 0;
	countLoses = 0;
	printScore();
	resetBoard();

}// End newGame()

//Button Listeners
document.getElementById('resetButton').addEventListener('click', resetBoard);
document.getElementById('newGameButton').addEventListener('click', newGame);

//Starting Setup
cards = shuffle(cards);
createBoard();
























