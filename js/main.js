let betbutton = document.getElementById('bet');
betbutton.addEventListener('click', bet);
let dealbutton = document.getElementById('deal');
dealbutton.addEventListener('click', deal);
let resetbutton = document.getElementById('reset');
resetbutton.addEventListener('click', reset);
resetbutton.style.display = "none";

let suit = ["♠", "♥", "♣", "♦"];
let type = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suitcount = 0;
let typecount = 0;
let suitcount2 = 0;
let typecount2 = 0;
let suitcount3 = 0;
let typecount3 = 0;
let suitcount4 = 0;
let typecount4 = 0;
let suitcount5 = 0;
let typecount5 = 0;


let firstswap = false, secondswap = false, thirdswap = false, fourswap = false, fiveswap = false; 

let count = 1;

let money = 500;
document.getElementById("wager").innerText = "Bet: " + count;
document.getElementById("money").innerText = "Credits: " + money;

function first() {
    if (firstswap === true) {
    document.getElementById('card-display1').style.borderColor = "black";
    document.getElementById('card-display1').style.opacity = "1.0";
    firstswap = false;
    console.log(firstswap);
    } else {
        document.getElementById('card-display1').style.borderColor = "blue";
        document.getElementById('card-display1').style.opacity = "0.8";
        firstswap = true;
    }
}

function second() {
    if (secondswap === true) {
        document.getElementById('card-display2').style.borderColor = "black";
        document.getElementById('card-display2').style.opacity = "1.0";
        secondswap = false;
        console.log(firstswap);
        } else {
            document.getElementById('card-display2').style.borderColor = "blue";
            document.getElementById('card-display2').style.opacity = "0.8";
            secondswap = true;
        }
}

function third() {
    if (thirdswap === true) {
        document.getElementById('card-display3').style.borderColor = "black";
        document.getElementById('card-display3').style.opacity = "1.0";
        thirdswap = false;
        console.log(firstswap);
        } else {
            document.getElementById('card-display3').style.borderColor = "blue";
            document.getElementById('card-display3').style.opacity = "0.8";
            thirdswap = true;
        }
}

function fourth() {
    if (fourswap === true) {
        document.getElementById('card-display4').style.borderColor = "black";
        document.getElementById('card-display4').style.opacity = "1.0";
        fourswap = false;
        console.log(fourswap);
        } else {
            document.getElementById('card-display4').style.borderColor = "blue";
            document.getElementById('card-display4').style.opacity = "0.8";
            fourswap = true;
        }
}

function fifth() {
    if (fiveswap === true) {
        document.getElementById('card-display5').style.borderColor = "black";
        document.getElementById('card-display5').style.opacity = "1.0";
        fiveswap = false;
        console.log(fiveswap);
        } else {
            document.getElementById('card-display5').style.borderColor = "blue";
            document.getElementById('card-display5').style.opacity = "0.8";
            fiveswap = true;
        }
}
function swap() {
    console.log(firstswap);
    if (firstswap === false) {
        suitcount = Math.floor((Math.random() * 4) + 0);
        typecount = Math.floor((Math.random() * 13) + 0);
        document.getElementById("suit-num1").innerText = suit[suitcount];
        document.getElementById("suit-type1").innerText = type[typecount] + suit[suitcount];
    }
    if (secondswap === false) {
        suitcount2 = Math.floor((Math.random() * 4) + 0);
        typecount2 = Math.floor((Math.random() * 13) + 0);
        document.getElementById("suit-num2").innerText = suit[suitcount2];
        document.getElementById("suit-type2").innerText = type[typecount2] + suit[suitcount2];
    }
    if (thirdswap === false) {
        suitcount3 = Math.floor((Math.random() * 4) + 0);
        typecount3 = Math.floor((Math.random() * 13) + 0);
        document.getElementById("suit-num3").innerText = suit[suitcount3];
        document.getElementById("suit-type3").innerText = type[typecount3] + suit[suitcount3];
    }
    if (fourswap === false) {
        suitcount4 = Math.floor((Math.random() * 4) + 0);
        typecount4 = Math.floor((Math.random() * 13) + 0);
        document.getElementById("suit-num4").innerText = suit[suitcount4];
        document.getElementById("suit-type4").innerText = type[typecount4] + suit[suitcount4];
    }
    if (fiveswap === false) {
        suitcount5 = Math.floor((Math.random() * 4) + 0);
        typecount5 = Math.floor((Math.random() * 13) + 0);
        document.getElementById("suit-num5").innerText = suit[suitcount5];
        document.getElementById("suit-type5").innerText = type[typecount5] + suit[suitcount5];
    }
    colorChange(suitcount, element, elements);   
    colorChange(suitcount2, element2, elements2);   
    colorChange(suitcount3, element3, elements3);   
    colorChange(suitcount4, element4, elements4);   
    colorChange(suitcount5, element5, elements5);
    points(typecount, typecount2, typecount3, typecount4, typecount5, suitcount, suitcount2, suitcount3, suitcount4, suitcount5);
}

document.getElementById('card-display1').addEventListener("click", first);
document.getElementById('card-display2').addEventListener("click", second);
document.getElementById('card-display3').addEventListener("click", third);
document.getElementById('card-display4').addEventListener("click", fourth);
document.getElementById('card-display5').addEventListener("click", fifth);
// let suitNum = 

document.getElementById("point1").style.backgroundColor = "red";
function bet() {
    count++;
    if (count > 1) {
        let previous = "";
        previous = "point" + (count - 1);
        document.getElementById(previous).style.backgroundColor = "black";
        }
    if (count > 5) {
        count =  1;
    }
    let element = "";
    element = "point" + count;
    document.getElementById(element).style.backgroundColor = "red";
    console.log(count);
    document.getElementById("wager").innerText = "Bet: " + count;
}

function deal() {
    betbutton.disabled = true;
    dealbutton.disabled = true;
    swap();
}

function reset() {
    resetbutton.style.display = "none";
    document.getElementById('point').innerText = "";
    betbutton.disabled = false;
    dealbutton.disabled = false;
    display();
    firstswap = false;
    secondswap = false; 
    thirdswap = false;
    fourswap = false;
    fiveswap = false; 
    document.getElementById('card-display1').style.borderColor = "black";
    document.getElementById('card-display1').style.opacity = "1.0";
    document.getElementById('card-display2').style.borderColor = "black";
    document.getElementById('card-display2').style.opacity = "1.0";
    document.getElementById('card-display3').style.borderColor = "black";
    document.getElementById('card-display3').style.opacity = "1.0";
    document.getElementById('card-display4').style.borderColor = "black";
    document.getElementById('card-display4').style.opacity = "1.0";
    document.getElementById('card-display5').style.borderColor = "black";
    document.getElementById('card-display5').style.opacity = "1.0";
}

function display() {
    suitcount = Math.floor((Math.random() * 4) + 0);
    typecount = Math.floor((Math.random() * 13) + 0);
    suitcount2 = Math.floor((Math.random() * 4) + 0);
    typecount2 = Math.floor((Math.random() * 13) + 0);
    suitcount3 = Math.floor((Math.random() * 4) + 0);
    typecount3 = Math.floor((Math.random() * 13) + 0);
    suitcount4 = Math.floor((Math.random() * 4) + 0);
    typecount4 = Math.floor((Math.random() * 13) + 0);
    suitcount5 = Math.floor((Math.random() * 4) + 0);
    typecount5 = Math.floor((Math.random() * 13) + 0);

    if (suitcount === suitcount2 && typecount === typecount2 || suitcount === suitcount3 && typecount === typecount3 || suitcount === suitcount4 && typecount === typecount4 || suitcount === suitcount5 && typecount === typecount5 ) {
        suitcount = Math.floor((Math.random() * 4) + 0);
        typecount = Math.floor((Math.random() * 13) + 0);
    }
    if (suitcount2 === suitcount3 && typecount2 === typecount3 || suitcount2 === suitcount4 && typecount2 === typecount4 || suitcount2 === suitcount5 && typecount2 === typecount5) {
        suitcount2 = Math.floor((Math.random() * 4) + 0);
        typecount2 = Math.floor((Math.random() * 13) + 0);
    }
    if (suitcount3 === suitcount4 && typecount3 === typecount4 || suitcount3 === suitcount5 && typecount3 === typecount5) {
        suitcount3 = Math.floor((Math.random() * 4) + 0);
        typecount3 = Math.floor((Math.random() * 13) + 0);
    }
    if (suitcount4 === suitcount5 && typecount4 === typecount5) {
        suitcount4 = Math.floor((Math.random() * 4) + 0);
        typecount4 = Math.floor((Math.random() * 13) + 0);
    }

    

    element = "suit-num1";
    elements = "suit-type1";
    element2 = "suit-num2";
    elements2 = "suit-type2";
    element3 = "suit-num3";
    elements3 = "suit-type3";
    element4 = "suit-num4";
    elements4 = "suit-type4";
    element5 = "suit-num5";
    elements5 = "suit-type5";

    document.getElementById(element).innerText = suit[suitcount];
    document.getElementById(elements).innerText = type[typecount] + suit[suitcount];;
    document.getElementById(element2).innerText = suit[suitcount2];
    document.getElementById(elements2).innerText = type[typecount2] + suit[suitcount2];;
    document.getElementById(element3).innerText = suit[suitcount3];
    document.getElementById(elements3).innerText = type[typecount3] + suit[suitcount3];
    document.getElementById(element4).innerText = suit[suitcount4];
    document.getElementById(elements4).innerText = type[typecount4] + suit[suitcount4];
    document.getElementById(element5).innerText = suit[suitcount5];
    document.getElementById(elements5).innerText = type[typecount5] + suit[suitcount5];
    colorChange(suitcount, element, elements);   
    colorChange(suitcount2, element2, elements2);   
    colorChange(suitcount3, element3, elements3);   
    colorChange(suitcount4, element4, elements4);   
    colorChange(suitcount5, element5, elements5);   
   
}
display();

function colorChange(count, suits, num) {
	if (suit[count] ===  "♥" || suit[count] ===  "♦") {
    document.getElementById(suits).style.color = "red";
    document.getElementById(num).style.color = "red";
} else {
    document.getElementById(suits).style.color = "black";
    document.getElementById(num).style.color = "black";
}
}

function points(tNum, tNum2, tNum3, tNum4, tNum5, sNum, sNum2, sNum3, sNum4, sNum5) {
    money -= count;
    document.getElementById('money').innerHTML = "Credits: " + money; 
    resetbutton.style.display = "block";
    if (type[tNum] === "J" && type[tNum2] === "J" || type[tNum] === "J" && type[tNum3] === "J" || type[tNum] === "J" && type[tNum4] === "J" || type[tNum] === "J" && type[tNum5] === "J"
     || type[tNum2] === "J" && type[tNum3] === "J" || type[tNum2] === "J" && type[tNum4] === "J" || type[tNum2] === "J" && type[tNum5] === "J" 
     || type[tNum3] === "J" && type[tNum4] === "J" || type[tNum3] === "J" && type[tNum5] === "J"
     || type[tNum3] === "J" && type[tNum4] === "J" || type[tNum4] === "J" && type[tNum5] === "J" 
     || type[tNum] === "Q" && type[tNum2] === "Q" || type[tNum] === "Q" && type[tNum3] === "Q" || type[tNum] === "Q" && type[tNum4] === "Q" || type[tNum] === "Q" && type[tNum5] === "Q"
     || type[tNum2] === "Q" && type[tNum3] === "Q" || type[tNum2] === "Q" && type[tNum4] === "Q" || type[tNum2] === "Q" && type[tNum5] === "Q"
     || type[tNum3] === "Q" && type[tNum4] === "Q" || type[tNum3] === "Q" && type[tNum5] === "Q"
     || type[tNum3] === "Q" && type[tNum4] === "Q" || type[tNum4] === "Q" && type[tNum5] === "Q" 
     || type[tNum] === "K" && type[tNum2] === "K" || type[tNum] === "K" && type[tNum3] === "K" || type[tNum] === "K" && type[tNum4] === "K" || type[tNum] === "K" && type[tNum5] === "K"
     || type[tNum2] === "K" && type[tNum3] === "K" || type[tNum2] === "K" && type[tNum4] === "K" || type[tNum2] === "K" && type[tNum5] === "K"
     || type[tNum3] === "K" && type[tNum4] === "K" || type[tNum3] === "K" && type[tNum5] === "K"
     || type[tNum3] === "K" && type[tNum4] === "K" || type[tNum4] === "K" && type[tNum5] === "K" 
     || type[tNum] === "A" && type[tNum2] === "A" || type[tNum] === "A" && type[tNum3] === "A" || type[tNum] === "A" && type[tNum4] === "A" || type[tNum] === "A" && type[tNum5] === "A"
     || type[tNum2] === "A" && type[tNum3] === "A" || type[tNum2] === "A" && type[tNum4] === "A" || type[tNum2] === "A" && type[tNum5] === "A"
     || type[tNum3] === "A" && type[tNum4] === "A" || type[tNum3] === "A" && type[tNum5] === "A"
     || type[tNum3] === "A" && type[tNum4] === "A" || type[tNum4] === "A" && type[tNum5] === "A" ) {
        document.getElementById('point').innerText = "Jacks or Better";
        money += count;
        document.getElementById('money').innerHTML = "Credits: " + money; 
    }
    if (tNum === tNum2 &&  tNum3 ===  tNum4 || tNum === tNum2 && tNum3 === tNum5 || tNum === tNum2 && tNum4 === tNum5
     || tNum === tNum3 &&  tNum2 ===  tNum4 || tNum === tNum3 && tNum2 === tNum5 || tNum === tNum3 && tNum4 === tNum5 
     || tNum === tNum4 &&  tNum2 ===  tNum3 || tNum === tNum4 && tNum2 === tNum5 || tNum === tNum4 && tNum3 === tNum5 
     || tNum === tNum5 &&  tNum2 ===  tNum3 || tNum === tNum5 && tNum2 === tNum4 || tNum === tNum5 && tNum3 === tNum4 
     || tNum2 === tNum3 &&  tNum ===  tNum4 || tNum2 === tNum && tNum === tNum5 || tNum2 === tNum3 && tNum4 === tNum5 
     || tNum2 === tNum4 &&  tNum ===  tNum3 || tNum2 === tNum4 && tNum === tNum5 || tNum2 === tNum4 && tNum3 === tNum5 
     || tNum2 === tNum5 &&  tNum ===  tNum3 || tNum2 === tNum5 && tNum === tNum4 || tNum2 === tNum5 && tNum3 === tNum4
     || tNum3 === tNum4 &&  tNum ===  tNum2 || tNum3 === tNum4 && tNum === tNum5 || tNum3 === tNum4 && tNum2 === tNum5
     || tNum3 === tNum5 &&  tNum ===  tNum3 || tNum3 === tNum5 && tNum === tNum4 || tNum3 === tNum5 && tNum2 === tNum4
     || tNum4 === tNum5 &&  tNum ===  tNum2 || tNum4 === tNum5 && tNum === tNum3 || tNum4 === tNum5 && tNum2 === tNum3) {
         
            document.getElementById('point').innerText = "Two Pairs";
            money += count * 2;
            document.getElementById('money').innerHTML = "Credits: " + money; 
    }
    if (tNum === tNum2 && tNum2 === tNum3 || tNum === tNum2 && tNum2 === tNum4 || tNum === tNum2 && tNum2 === tNum5 
        || tNum === tNum3 && tNum3 === tNum4 || tNum === tNum3 && tNum3 === tNum5 || tNum === tNum4 && tNum4 === tNum5 
        || tNum2 === tNum3 && tNum3 === tNum4 ||  tNum2 === tNum3 && tNum3 === tNum5 || tNum2 === tNum4 && tNum4 === tNum5 ||  tNum3 === tNum4 && tNum4 === tNum5) {
        document.getElementById('point').innerText = "Three of a Kind";
        money += count * 3;
        document.getElementById('money').innerHTML = "Credits: " + money; 
    }

    if (tNum && tNum2 === tNum + 1 && tNum3 === tNum + 2 && tNum4 === tNum + 3 && tNum5 === tNum + 4 
        || tNum === 9 && tNum2 === tNum + 1 && tNum3 === tNum + 2 && tNum4 === tNum + 3 && tNum5 === 0 ) {
            if (tNum <= 9) {
            document.getElementById('point').innerText = "Straight";
            money += count * 4;
            document.getElementById('money').innerHTML = "Credits: " + money; 
        }
    }
    if (tNum && tNum2 === tNum - 1 && tNum3 === tNum - 2 && tNum4 && tNum - 3 && tNum5 === tNum - 4 
        || tNum === 0 && tNum2 === 12 && tNum3 === 11 && tNum4 === 10 && tNum5 == 9) {
        if (tNum >= 4 || tNum === 0) {
        document.getElementById('point').innerText = "Straight";
        money += count * 4;
        document.getElementById('money').innerHTML = "Credits: " + money; 
        }
    }
    if (suit[sNum] === suit[sNum2] && suit[sNum2] === suit[sNum3] && suit[sNum3] === suit[sNum4] && suit[sNum4] === suit[sNum5]) {
        document.getElementById('point').innerText = "Flush";
        money += count * 6;
        document.getElementById('money').innerHTML = "Credits: " + money; 
    }
    if (tNum === tNum2 && tNum2 === tNum3 && tNum4 === tNum5
        || tNum === tNum2 && tNum2 === tNum4 && tNum3 === tNum5
        || tNum === tNum2 && tNum2 === tNum5 && tNum3 === tNum4
        || tNum === tNum3 && tNum3 === tNum4 && tNum2 === tNum5
        || tNum === tNum3 && tNum3 === tNum5 && tNum2 === tNum4
        || tNum2 === tNum3 && tNum3 === tNum5 && tNum === tNum4
        || tNum2 === tNum4 && tNum4 === tNum5 && tNum === tNum3
        || tNum3 === tNum4 && tNum4 === tNum5 && tNum === tNum2) {
            document.getElementById('point').innerText = "Full House";
            money += count * 9;
            document.getElementById('money').innerHTML = "Credits: " + money; 
        }
        if (tNum === tNum2 && tNum2 === tNum3 && tNum3 === tNum4 
            || tNum === tNum2 && tNum2 === tNum4 && tNum4 === tNum5
            || tNum === tNum3 && tNum3 === tNum4 && tNum4 === tNum5
            || tNum2 === tNum3 && tNum3 === tNum4 && tNum4 === tNum5) {
                document.getElementById('point').innerText = "Four of a Kind";
                money += count * 25;
                document.getElementById('money').innerHTML = "Credits: " + money; 
            }
        if (tNum && tNum2 === tNum + 1 && tNum3 === tNum + 2 && tNum4 === tNum + 3 && tNum5 === tNum + 4 
            || tNum === 9 && tNum2 === tNum + 1 && tNum3 === tNum + 2 && tNum4 === tNum + 3 && tNum5 === 0 ) {
                if (tNum <= 9 && sNum === sNum2 && sNum2 === sNum3 && sNum3 === sNum4 && sNum4 === sNum5) {
                document.getElementById('point').innerText = "Straight Flush";
                money += count * 50;
                document.getElementById('money').innerHTML = "Credits: " + money; 
            }
        }

        if (tNum && tNum2 === tNum - 1 && tNum3 === tNum - 2 && tNum4 && tNum - 3 && tNum5 === tNum - 4 
            || tNum === 0 && tNum2 === 12 && tNum3 === 11 && tNum4 === 10 && tNum5 == 9) {
            if (tNum >= 4 || tNum === 0) {
            if (tNum <= 9 && sNum === sNum2 && sNum2 === sNum3 && sNum3 === sNum4 && sNum4 === sNum5) {
                document.getElementById('point').innerText = "Straight Flush";
                money += count * 50;
                document.getElementById('money').innerHTML = "Credits: " + money; 
            }
            } 
        }
        if (sNum === sNum2 && sNum2 === sNum3 && sNum3 === sNum4 && sNum4 === sNum5) {
            if (tNum === 0 && tNum2 === 12 && tNum3 === 11 && tNum4 === 10 && tNum5 === 9) {
                document.getElementById('point').innerText = "Royal Flush";
                money += count * 250;
                document.getElementById('money').innerHTML = "Credits: " + money; 
            }
        }

}
