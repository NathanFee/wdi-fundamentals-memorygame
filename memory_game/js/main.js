
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

var checkForMatch = function()
{

	if (cardsInPlay.length === 2)
	{
		if (cardsInPlay[0] === cardsInPlay[1])
		{
			//delay alert until after card flips
			setTimeout(function() {alert("You found a match!.");}, 100);

		}
		else
		{
			//delay alert until after card flips
			setTimeout(function() {alert("Sorry, try again.");}, 100);
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


var resetBoard = function(){
console.log("Reset Button Clicked");
	
var boardNode = document.getElementById('game-board');
	while (boardNode.firstChild) 
	{
		boardNode.removeChild(boardNode.firstChild);
	}
	cardsInPlay = [];
	createBoard();

}// End resetBoard()


createBoard();


//Reset Button event listener
document.getElementById('resetButton').addEventListener('click', resetBoard);



















