"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

let up10= "";
for (let i = 1; i <=10; i++) { 
    up10 += i + " ";
}
printOut(up10.trim());

let down1 = "";
for (let i = 10; i >= 1; i--) {
     down1 += i + " ";
}
printOut(down1.trim())

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const guessNumber = 20

let part2Random = Math.floor(Math.random() * 60) + 1;
while (part2Random !== guessNumber) {
    part2Random = Math.floor(Math.random() * 60) + 1;
}
printOut ("You guessed the right number : " + part2Random);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part3Time = Date.now ();
const part3Guess = 236754;

let part3Random;
let part3Count = 0;

do {
    part3Random = Math.floor(Math.random () * 1000000) + 1;
    part3Count++;
} while (part3Random !== part3Random);

printOut("Number of the guesses: " + part3Count);
const part3DeltaTime = Date.now() - part3Time;
printOut("Number of mSec: " + part3DeltaTime);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

let part4Primes = ""; 
for (let i = 1; i <= 200; i++) {
    let j = i - 1;
    let isPrime = true;
    while (j > 1 && isPrime) {
        let rest = i % j;
        isPrime = rest !== 0;
        j--;
    }
    if (isPrime) {
        part4Primes += "" + i;
    }
} 

printOut(part4Primes);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut (newLine)

for (let r = 1; r <= 7; r++) {
    let linje = "";
    for (let c = 1; c <= 9; c++) {
        linje = linje + "C" + c + "R" + r + " ";
    }
printOut(linje.trim());
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

function getGrade(score){
    let percent = (score / 236) * 100; 
    if (percent >= 89 ) return "A";
    else if (percent >= 77 ) return "B";
    else if (percent >= 65 ) return "C";
    else if (percent >= 53 ) return "D";
    else if (percent >= 41 ) return "E";
    else return "F";
}

for (let student = 1; student <= 5; student++) {
    let score = Math.floor(Math.random() * 237);
    let grade = getGrade(score);
    printOut("Student " + student + " got " + score + " points and grade " + grade);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 printOut(newLine)

 function rolldice() {
    return Math.floor(Math.random() * 6) + 1;
 }

 function getCounts(dice) {
    let counts = [0, 0, 0, 0, 0, 0];
    for (let die of dice) {
        counts[die - 1]++;
    }
    return counts;
 }
 function checkCombinations(dice) {
    let counts = getCounts(dice);

    if (counts.every(count => count === 1)) {
        return "Full straight!";
    }
    else if (counts.filter(count => count === 2).length === 3) {
        return "3 pairs!";
    }
    else if (counts.includes(4) && counts.includes(2)) {
        return "4 of a kind + a pair!";
    }
    else if (counts.includes(6)) {
        return "Yahtzee!";
    } 
    return null;
    }

 function trowUntil(target) {
    let trows = 0;
    let result = null;

    do {
        trows++;
        let dice = [];
        for (let i = 0; i < 6; i ++) { 
            dice.push(rolldice());
        }
        result = checkCombinations(dice);
    } while (result !== target);
    return trows;
 }
 let goals = ["Full straight!", 
    "3 pairs!", 
    "4 of a kind + a pair!", 
    "Yahtzee!"];
   for (let goal of goals) {
        let count = trowUntil(goal);
        printOut("It took " + count + " throws to get " + goal);
    }

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut("Replace this with you answer!");
printOut(newLine);
