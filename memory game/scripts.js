const cards = document.querySelectorAll('.card');


let hasBeenClicked = false;
let lockBoard = false; 
let firstCard;
let secondCard;



function flipCard() {

	if (this === firstCard) {
		return;
	}

	this.classList.add('flip');
	if (hasBeenClicked == false) {

		hasBeenClicked = true;
		firstCard = this;
		return;
	}

	secondCard = this;
	matchCards();


	}


function matchCards() {

	if (firstCard.dataset.card === secondCard.dataset.card) {

		disableCards();
	}
	else{

		unflipCards();
	}

}

function disableCards() {

	firstCard.removeEventListener('click',flipCard);
	secondCard.removeEventListener('click',flipCard);

	resetBoard();

}

function unflipCards() {
	lockBoard = true; 

	setTimeout (() => {
	firstCard.classList.remove('flip');
	secondCard.classList.remove('flip');

	resetBoard();

	}, 800);
}

function resetBoard(){
	[hasBeenClicked ,lockBoard] = [false,false];
	[firstCard, secondCard] = [null , null];
} 

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();


cards.forEach(card => card.addEventListener('click', flipCard));

 



 

