// --------------- BINGO BOARD --------------- //
/*
 * toggles color of table element
 */
function changeColor(element) 
{
    if(element.style.backgroundColor !== "red")
    {
        element.style.backgroundColor = "red";
    } else 
    {
        element.style.backgroundColor = "white";
    }
}// end changeColor()

/*
 * resets whole table back to white
 */
function reset()
{
    var elements = document.getElementsByClassName("col");
    
    for(var i = 0; i < elements.length; i++)
    {
        elements[i].style.backgroundColor = "white";
    }
}//end reset()

// --------------- BINGO NUMBERS AND BALL POPUP --------------- //
var bingoNumbers = [];
for(var i = 1; i <= 75; i++){bingoNumbers.push(i);} //array of bingo numbers, 1..75

/*
 * Randomly chooses a number from the bingoNumbers array and removes it,
 * assigns the correct letter,
 * displays above info in a bingo ball
 */
function pullNumber()
{
    var bingoNumber = Math.floor(Math.random() * bingoNumbers.length);
    console.log("The number pulled was: " + bingoNumber + "\nRemaining numbers: " + bingoNumbers.length);
    var bingoLetter;
    
    //assigns bingo letter to the number drawn
    if(bingoNumber >  0 && bingoNumber <= 15){ bingoLetter = "B"; } else 
    if(bingoNumber > 15 && bingoNumber <= 30){ bingoLetter = "I"; } else 
    if(bingoNumber > 30 && bingoNumber <= 45){ bingoLetter = "N"; } else 
    if(bingoNumber > 45 && bingoNumber <= 60){ bingoLetter = "G"; } else 
    if(bingoNumber > 60 && bingoNumber <= 75){ bingoLetter = "O"; }
    
    bingoNumbers.splice(bingoNumber, 1); 
    
    //creates bingo ball popup
    var popup = document.createElement('div');
    popup.setAttribute('class', 'popup flex-container-center');
    popup.innerHTML = "<button onclick=\"closePopup()\">Close</button>\"<div class=\"bingo-ball\"><div class=\"bingo-ball-info\"><h4 class=\"bingo-ball-letter\">"+bingoLetter+"</h4><h3 class=\"bingo-ball-number\">"+bingoNumber+"</h3></div></div>";
    
    document.getElementById("bingo-js").appendChild(popup);
}//end pullNumber()

/*
 * closes the fullscreen bingo ball popup
 */
function closePopup(){ document.getElementById("bingo-js").innerHTML = ""; }