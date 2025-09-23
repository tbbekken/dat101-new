"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Task 1, 2 and 3");
printOut(newLine);

// Part 1/2s
let wakeUpTime = 7;
let actuallyWakeUpTime = 6;

printOut ("Part 1/2: ");
if (wakeUpTime === actuallyWakeUpTime) {
  printOut("I can take the bus to school." );
} else {
  printOut("I need to take the car to school.");
}
printOut(newLine);

// Part 3
wakeUpTime = 7;

printOut ("Part 3: ");
if (wakeUpTime == 7){
  printOut (" I can take the bus to school." );
} else if (wakeUpTime == 8) {
  printOut (" I can take the train to school." );
} else {
  printOut (" I need to take the car to school." );
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

//part 4
printOut ("Part 4: ");

let tall = 19;

if (tall >= 0) {
  printOut ("Tallet er positiv");
} else {
  printOut ("Tallet er negativ");
}
printOut(newLine);

//part 5
printOut ("Part 5: ");
tall = 0;

if (tall > 0) {
  printOut ("Tallet er positiv");
} else if (tall < 0) {
  printOut ("Tallet er negativ");
} else {
  printOut ("tallet er null");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut (newLine);
let random = Math.random() * 8;
let imageSize = 4;

if (random > imageSize) {
  printOut ("Thank you")
} else {
  printOut ("The image is too small");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut (newLine);

let random2 = Math.random () * 8;
let imageSize2 = 4;

if (random2 > imageSize2) {
  printOut("Thank you");
} else if (imageSize2 >= 6) {
  printOut("The image is too large");
} else {
  printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const monthList = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", 
  "August", "September", "Oktober", "November", "Desember"
  ];

const noOfMonth = monthList.length;

const mathIndex = Math.floor(Math.random() * noOfMonth);
const monthName = monthList[mathIndex];

console.log ("Random month", monthName);

if (monthName.toLowerCase().includes("r")) {
  printOut("You must take your vitamin D");
} else { 
  printOut ("You do not need to take your vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

printOut (`There are ${daysInMonth[mathIndex]} days in ${monthName}.`);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const monthList2 = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"];

const noOfMonth2 = monthList2.length; 
const monthName2 = monthList2 [Math.floor(Math.random() * noOfMonth2)];

printOut("In " + monthName2);

if (monthName2 === "March" || monthName2 === "May") {
  printOut ("The gallery is closed for refurbishments.");
} else if (monthName2 == "April") {
  printOut("The gallery is temporarily open in the building next door");
} else {
  printOut("The gallery is open as usual.");
}

printOut(newLine);
