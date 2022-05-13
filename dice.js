// Declaration
let userName= prompt("username");
alert("Welcome" + " "+ userName + " " + "Click OK to Start");

let congrat = document.querySelector(".congratulation");
let btn = document.querySelector(".btn");
let diceContainer= document.querySelector(".dice-icon");

let numbers= ["one", "two", "three", "four", "five", "six"];

// Assining Function

btn.addEventListener("click", function () {
    let randomNum = Math.floor(Math.random()*6);
    console.log(randomNum);

    diceContainer.textContent = " ";
    let di = numbers[randomNum];
    let userDi= document.createElement("i");
    userDi.classList.add("dice", "fas", `fa-dice-${di}`);

    diceContainer.appendChild(userDi);
   
    if (randomNum == 5) {
      
        setTimeout(() => {
        let congratMsg = document.querySelector(".message");
        congratMsg.textContent = "Congratulations"+ " " + userName +"" + " you rolled a six";
            congrat.style.display = "block";
            userDi.style.display = "none";
        }, 1700);
    }
    else{
        congrat.style.display = "none";
    }
   
    
})