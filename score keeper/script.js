var gameLimit = 5;

var gameOver = false;

var limitInput = document.querySelector("input");

var resetButton = document.getElementsByTagName("button")[2];

var limitDisplay = document.querySelector("p");

var player1 = 
{
    button : document.getElementsByTagName("button")[0],
    score : 0,
    display : document.querySelectorAll("span")[0]
};

var player2 =
{
    button: document.getElementsByTagName("button")[1],
    score : 0,
    display : document.querySelectorAll("span")[1]
}


limitInput.addEventListener("change", function(){
    limitDisplay.textContent = "Game limit: "+ limitInput.value;
    gameLimit = limitInput.value;
})

player1.button.addEventListener("click", playerAction(player1));

player2.button.addEventListener("click", playerAction(player2));

resetButton.addEventListener("click", function(){
    gameOver = false;
    player2.score = 0;
    player1.score = 0;

    player1.display.classList = [];
    player2.display.classList = [];

    displayScore();
});

function playerAction(player){
    if (!gameOver){
        player.score++;
        player.display.textContent = player.score;
        if(player.score === gameLimit){
            player.display.classList.toggle("winner");
            gameOver = true;
        }
    }
}

function displayScore(){
    player1.display.textContent = player1.score;
    player2.display.textContent = player2.score;
}