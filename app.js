'use strict'

let counter = 0
let counterDOM = document.querySelector("#value")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")
let resetDOM = document.querySelector("#reset")


counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)
resetDOM.addEventListener("click", clickEvent)

function clickEvent() {
    if(this.id == "increase") {
        counter++;
    }else if (this.id == "decrease") {
        counter--;
    }else {
        counter = 0
    }

    counterDOM.innerHTML = counter
    
    if (counter > 0) {
        value.style.color = "green";
    }
    if (counter < 0) {
        value.style.color = "red";
    }
    if (counter === 0) {
        value.style.color = "white"
    }
}













