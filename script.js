//let ans = document.querySelector(".answer");//
let pAns = document.createElement("p");

//produce a random 1 digit number (0-9)
function random1(){
    pAns.textContent = Math.floor((Math.random() * 10));
}
//produce a random 2 digit number (10-99)
function random2(){
    pAns.textContent = Math.floor((Math.random() * 90)+10);
}
//produce a random 3 digit number (100-999)
function random3(){
    pAns.textContent = Math.floor((Math.random() * 900)+100);
}
//produce a random 4 digit number (1000-9999)
function random4(){
    pAns.textContent = Math.floor((Math.random() * 9000)+1000);
}
//produce a random 5 digit number (10000-99999)
function random5(){
    pAns.textContent = Math.floor((Math.random() * 90000)+10000);
}
//produce a random 6 digit number (100000-999999)
function random6(){
    pAns.textContent = Math.floor((Math.random() * 900000)+100000);
}
//produce a random 7 digit number (1000000-9999999)
function random7(){
    pAns.textContent = Math.floor((Math.random() * 9000000)+1000000);
}
//produce a random 8 digit number (10000000-99999999)
function random8(){
    pAns.textContent = Math.floor((Math.random() * 90000000)+10000000);
}
//produce a random 9 digit number (100000000-999999999)
function random9(){
    pAns.textContent = Math.floor((Math.random() * 900000000)+100000000);
}
//produce a random 10 digit number (1000000000-9999999999)
function random10(){
    pAns.textContent = Math.floor((Math.random() * 9000000000)+1000000000);
}


let formbox = document.querySelector(".form");
let error = document.createElement("p");



function generator(){
    let x = document.getElementById("digit").value;
    let text;
    if (x == 1){
        random1();
    }
    else if (x == 2){
        random2();
    }
    else if (x == 3){
        random3();
    }
    else if (x == 4){
        random4();
    }
    else if (x == 5){
        random5();
    }
    else if (x == 6){
        random6();
    }
    else if (x == 7){
        random7();
    }
    else if (x == 8){
        random8();
    }
    else if (x == 9){
        random9();
    }
    else if (x == 10){
        random10();
    }
    else if (isNaN(x)){
        text = "Input not a number";
    }
    else if(x < 1 || x > 10){
        text = "Input invalid";
    }
    
    error.textContent = text;
    formbox.appendChild(error);
    formbox.appendChild(pAns);
}



const button = document.querySelector(".btn");
button.addEventListener("click", generator);
