/**
 * Created by alams on 4/26/17.
 */


var numberOfSquare = 6;

var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayColor=document.querySelector("#displayColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");


easyButton.addEventListener("click", function () {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");

    numberOfSquare =3;
    colors = generateRandomColor(numberOfSquare);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;

    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
})


hardButton.addEventListener("click", function () {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");

    numberOfSquare = 6;
    colors = generateRandomColor(numberOfSquare);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;

    for(var i=0;i<squares.length;i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
})


resetButton.addEventListener("click", function () {
    // generate new colors
    colors = generateRandomColor(numberOfSquare);

    // pick a new random color
    pickedColor = pickColor();

    // change display color to match picked color
    displayColor.textContent =  pickedColor;
    messageDisplay.textContent="";
    this.textContent="New Color";

    for(var i=0; i< squares.length;i++) {

        // add initial color to the square
        squares[i].style.background = colors[i];
    }
h1.style.background = "#steelblue";

})

displayColor.textContent = pickedColor;


for(var i=0; i< squares.length;i++){

    // add initial color to the square
    squares[i].style.background = colors[i];


    //add click event to the square

    squares[i].addEventListener("click", function () {
        // grab color and compare
        var clickedColor = this.style.background;


        if(clickedColor === pickedColor){
            messageDisplay.textContent = "CORRECT";
            h1.style.background = clickedColor;
            changeColor(clickedColor);
            resetButton.textContent = "Play Again?";

        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}


function changeColor(color) {

    for(var i=0; i<squares.length;i++){
        squares[i].style.background = color;
    }
    
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    var arr = [];
    for(var i=0; i<num;i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    //random number for red
    var r = Math.floor(Math.random() * 256);
    //random number for green
    var g = Math.floor(Math.random() * 256);
    //random number for blue
    var b = Math.floor(Math.random() * 256);


    return "rgb(" + r + ", " + g + ", " + b + ")";
}


