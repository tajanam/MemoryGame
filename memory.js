const cardArray = () => [
    {
        name: 'bird',
        img: 'images/bird.jpg'
    },
    {
        name: 'dog',
        img: 'images/dog.png'
    },
    {
        name: 'fox',
        img: 'images/fox.jpg'
    },
    {
        name: 'horse',
        img: 'images/horse.jpg'
    },
    {
        name: 'racoon',
        img: 'images/racoon.jpg'
    },
    {
        name: 'wolf',
        img: 'images/wolf.jpg'
    },
    {
        name: 'bird',
        img: 'images/bird.jpg'
    },
    {
        name: 'dog',
        img: 'images/dog.png'
    },
    {
        name: 'fox',
        img: 'images/fox.jpg'
    },
    {
        name: 'horse',
        img: 'images/horse.jpg'
    },
    {
        name: 'racoon',
        img: 'images/racoon.jpg'
    },
    {
        name: 'wolf',
        img: 'images/wolf.jpg'
    }
];

// array for collecting cards
const cardsMatched = [];

const board = document.getElementById("board");

const randomize = () => {
    const cards = cardArray();
    cards.sort(() => Math.random () - 0.5); 
    return cards;
}
// Create board
const createBoard = () => {
    // invoke randomize function
    const cards = randomize();

    cards.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //Attach the info to the cards
        face.src = "images/blank.jpg";
        // Attach cards to section
        board.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener("click", function(e){
            face.src = item.img;
            //invoke check function
            checkCards(e);
        });
    }); 
}

// Check match
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");

    //Logic
    if(flippedCards.length === 2){
        let result = parseInt(document.getElementById("score").innerHTML);
        if(flippedCards[0].src === flippedCards[1].src){
                cardsMatched.push(flippedCards);
                flippedCards.forEach(card => {
                    card.removeEventListener("click", checkCards); // not working properly
                    card.classList.remove("flipped");
                    setTimeout(() => card.style.visibility="hidden", 1500);
                    let currentResult = result + 10;
                    document.getElementById("score").innerHTML = currentResult;
                    if(cardsMatched.length == 6){
                        document.getElementById("score").textContent = "Congratulations, you matched all cards!";
                    }
            });
        }
        else{
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.src = "images/blank.jpg", 1000)
            });
        }
    }
};

createBoard();
