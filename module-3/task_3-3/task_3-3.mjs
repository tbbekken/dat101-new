"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

let today;
function getTodaysDate () {
    today = new Date();
    const dateText = today.toLocaleString("no-NB", {weekday: "long",month: "long", day: "numeric", year: "numeric"});
    printOut (dateText);
}

getTodaysDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const event2XKO = new Date(Date.UTC(2025, 4, 14));

const deltaDays = Math.round((event2XKO - today) / (1000 * 60 * 60 * 24));

printOut(`Differanse i dager: ${deltaDays}`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

let radius = 5;

function circle(radius) {
    const diameter = Math.round (radius * 2);
    const circumference = Math.round (2 * Math.PI * radius);
    const area = Math.round ( Math.PI * radius * radius);

    printOut("Diameteren til sirken er " + diameter + "<br>");
    printOut("Omkretsen er " + circumference + "<br>");
    printOut("Arealet er " + area + "<br>");
}

circle(radius);


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

let rectangle = {
    width: 4,
    height: 7
}


function rectangleInfo(rectangle) {
    const circumference = Math.floor (2 * (rectangle.width + rectangle.height));
    const area = Math.floor (rectangle.width * rectangle.height);

    printOut("Rektangelet er: <br>");
    printOut("Omkretsen: " + circumference + "<br>");
    printOut("Arealet: " + area + "<br>");
}

rectangleInfo(rectangle);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

let value = toCelsius(100);

function toFahrenheit(celsius) {
    return (9/5) * celsius + 32;
}

let value2 = toFahrenheit();

printOut("100 Fahrenheit er " + value.toFixed(0) + " Celsius");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

function calculateNetPrice(gross,vatGroup) {
   vatGroup = vatGroup.toLowerCase();
   let vat;

 if (vatGroup === "normal") {
    vat = 20;
} else if (vatGroup === "food") {
  vat = 15;  
} else if (vatGroup === "hotel" || vatGroup === "transport" || vatGroup === "cinema") {
    vat = 10;
} else {
    console.log("Ugyldig VAT-group");
    return NaN;
}

let net = (100 * gross) / (vat + 100);

printOut("Gross " + gross + " VAT group: " + vatGroup + " = Net price: " + Math.round(net) );

return net;
}

calculateNetPrice(1000, "normal");
calculateNetPrice(1000, "food");
calculateNetPrice(1000, "hotel");
calculateNetPrice(1000, "goblins");


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

function calculateSpeed(distance, time, speed) {
    let missing = [distance, time, speed].filter(x => x === undefined).length;

if (missing > 1) {
    printOut("NaN");
    return NaN;
    } else if (speed === undefined) {
    speed = distance / time;
    printOut("Speed is " + speed);
    return speed;

} else if (time === undefined) {
    time = distance / speed;
    printOut("Time is " + time);
    return time;

} else if (distance === undefined) {
    distance = speed * time;
    printOut("Distance is " + distance);
    return distance;
}

printOut("NaN");
return NaN;
}

calculateSpeed (100, 2);
calculateSpeed (100, undefined, 50);
calculateSpeed (undefined, 2, 50);
calculateSpeed (100);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

function adjustText(text, maxSize, fillChar, addInFront) {
    if (text.length >= maxSize) {
        printOut(text);
        return text;
    }
    const result = addInFront 
        ? text.padStart(maxSize, fillChar) 
        : text.padEnd(maxSize, fillChar);

    printOut(result);
    return result;
}

adjustText("Hei hei", 8, "*", true);   
adjustText("Hei på deg", 8, "*", false);  
adjustText("Hallo du", 5, "!", false);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

function testConsecutivePartitions(totalLines = 200) {
    let current = 1;
    for (let line = 1; line <= totalLines; line++) {
        const leftCount = line + 1;
        const rightCount = line;

        let leftSum = 0;
        for (let i = 0; i < leftCount; i++) leftSum += current + i;

        let rightSum = 0;
        for (let i = 0; i < rightCount; i++) rightSum += current + leftCount + i;

        if (leftSum !== rightSum) {
            printOut("Feil på linje: " + line + " - venstre: " + leftSum + ", høyre: " + rightSum);
            return;
        }

        current += leftCount + rightCount;
    }

    printOut("Maths fun!");
}

testConsecutivePartitions(200);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(n) {
    if (n< 0) return NaN;
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

const testValue =[0,1,2,3,4,5,6];
for (let v of testValue) {
    printOut(v + "! = " + factorial(v));
}


printOut(newLine)
