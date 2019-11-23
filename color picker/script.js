var numSquares = 6;
var colors = generateRandomColor(numSquares);

var squares = document.getElementsByClassName("square");
var winnerColor = colors[selectColor()];
var colorDisplay = document.querySelector("span");
var messageDisplay = document.getElementById("message");

var h1 = document.querySelector("h1");

var resetButton = document.getElementById("reset");
var hardButton = document.getElementById("hard");
var easyButton = document.getElementById("easy");

easyButton.addEventListener("click", function(){
    //add or remove the blue background
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    //set the amount of squares to be 3
    numSquares = 3;
    reset();
    for (i =0; i<squares.length;i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            //if not, hide the square
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function(){
    //add or remove the blue background
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    //set the amount of squares to be 6
    numSquares= 6;
    for (i =0; i<squares.length;i++){
        squares[i].style.display = "block";
    }
    reset();
});

resetButton.addEventListener("click", function(){
    reset();
    
});

function reset(){
    //generate new random colors
    colors = generateRandomColor(numSquares);
    //pick new winner color
    winnerColor = colors[selectColor()];
    //display the winner color again
    colorDisplay.textContent = winnerColor;
    //change the colors of the squares
    for(i = 0; i<squares.length; i++){
        //add the color backgrounds to the squares
        squares[i].style.backgroundColor = colors[i];
    }
    //change the background of the header
    h1.style.backgroundColor = "#c9a206";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

//display the winner color
colorDisplay.textContent = winnerColor;

//loop through all the squares
for(i = 0; i<squares.length; i++){
    //add the color backgrounds to the squares
    squares[i].style.backgroundColor = colors[i];

    //add clickListeners to the squares
    squares[i].addEventListener("click",function(){
        if (this.style.backgroundColor === winnerColor){
            messageDisplay.textContent = "Correct!";
            changeColor();
            resetButton.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor = document.body.style.backgroundColor;
            messageDisplay.textContent = "Try Again";
        }
    })
}

function changeColor(){
    //loop through all squares
    for (i= 0; i<squares.length; i++){
        //make all the squares have the same color as  the winner one
        squares[i].style.backgroundColor = winnerColor;
    }
    //set the header's background to be the same color as winner
    h1.style.backgroundColor = winnerColor;
}

function generateRandomColor(num){
    var arr = [];

    for(i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    return ("rgb("+ Math.floor(Math.random()*255)
    +", "+Math.floor(Math.random()*255) +", "+
    Math.floor(Math.random()*255)+ ")");
}

function selectColor(){
    return Math.floor(Math.random()* colors.length)
}