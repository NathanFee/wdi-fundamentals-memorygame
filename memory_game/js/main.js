
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay =[];

var checkForMatch = function()
{
	if (cardsInPlay.length === 2)
	{
		if (cardsInPlay[0] === cardsInPlay[1])
		{
			alert("You found a match!");
		}
		else
		{
			alert("Sorry, try again.");

		}
	}
} // End checkForMatch()

var flipCard = function (cardId)
{
	console.log("User flipped " + cards[cardId] + ".");

	cardsInPlay.push(cards[cardId]);

	checkForMatch();
	
} // End flipCard()

flipCard(0);
flipCard(2);


