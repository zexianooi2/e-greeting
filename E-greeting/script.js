/*
==================================================
Get all necessary DOM:
1. class .card
2. class .front
==================================================
*/
var card = document.querySelector(".card");
var front = document.querySelector(".front");

/*
==================================================
Create a variable isOpen and set the value to false
==================================================
*/
var isOpen = false;

/*
==================================================
Attach click event handler to .card:
1. If the card is open
    - remove class .open from .front
2. Else if the card is close
    - add class .open to .front
3. Toggle variable isOpen (make isOpen to be not true)
==================================================
*/
card.onclick = function () {
    if (isOpen === true) {
        front.classList.remove("open");
    }
    else {
        front.classList.add("open");
    }
    isOpen = !isOpen;
}
