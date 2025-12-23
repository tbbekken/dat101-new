"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let part1Text = "";

printOut("lende = " + part1Array.length +  ", Verdi = " + part1Array[part1Array.length - 1]);

for(let i = 0; i < /*20*/ part1Array.length; /*i++*/ i = i + 1) {
    const value = part1Array[i]; // Every index of part1Array

    if (i === part1Array.length - 1){
        part1Text += value.toString() + ". ";
    } else {
        part1Text += value.toString() + ", ";
    }
}

printOut(part1Text);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const part2Text = part1Array.join(", ");
printOut(part2Text);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const part3Greeting = "hei på deg, hvordan går det?";
const greetingArray = part3Greeting.split(" ");
let part3Text =  " " ;

for(let i = 0; i < greetingArray.length; i++) {
    const word = greetingArray[i];
    part3Text += "index: " + i.toString() + " = " + word + newLine;
}

printOut(part3Text);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeNameFromArray(aArray, aName) {
     let deleteIndex = -1;
    for( let i = 0; i < aArray.length; i++) {
        const name = aArray[i];
        if (name === aName) {
            //her kan vi slette elementet for eksempel "hilde"
            //men dette gjør vi ikke her! Her løper vi igjen, og må slette senere!
            //Vi må lagre indeksen i en variabel.
            deleteIndex = i;
        }
    }
    //teste om jeg kan slette 
    if (deleteIndex <= 0) {
        printOut(aName + " not found, and deleted.");
        aArray.splice(deleteIndex, 1);
    }else {
        printOut(aName + " is not found!");
    }
}

removeNameFromArray(girls, "Hilde");
printOut(girls);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const boys = ["Jakob", "Lucas", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Mathias", "jonas", "Emil", "Sander", "Sebastian", "Marius", "Kristian", "Magnus", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];

const allNames = girls.concat(boys);
printOut(allNames);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

class TBook {
    #title;
    #author;
    #yearPublished;

    constructor(title, author, yearPublished) {
        this.#title = title;
        this.#author = author;
        this.#yearPublished = yearPublished;
    }

    toString() {
        return this.#title + ", " + this.#author + ", " + this.#yearPublished;
    }
}

const books = [
    new TBook("Harry Potter og de vises stein", "J.K. Rowling", 1997),
    new TBook("Ringenes Herre", "J.R.R. Tolkien", 1954),
    new TBook("Hunger Games", "Suzanne Collins", 2008),
];

for (const b of books) {
    printOut(b.toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const EWeekDays = {
    WeedDay1: { value: 0x01, name: "Mandag" },
    WeedDay2: { value: 0x02, name: "Tirsdag" },
    WeedDay3: { value: 0x03, name: "Onsdag" },
    WeedDay4: { value: 0x04, name: "Torsdag" },
    WeedDay5: { value: 0x05, name: "Fredag" },
    WeedDay6: { value: 0x06, name: "Lørdag" },
    WeedDay7: { value: 0x07, name: "Søndag" },
};

const keys = Object.keys(EWeekDays);
for (const key of keys) {
    const item = EWeekDays[key];
    printOut(`${key}: value = ${item.value}, name = ${item.name}`);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const random35 = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
printOut("Original: " + random35.join(", "));

const asc = (a, b) => a - b;
const desc = (a, b) => b - a;

const sortedAsc = [...random35].sort(asc);
const sortedDesc = [...random35].sort(desc);

printOut("Sorted Asc: " + sortedAsc.join(", "));
printOut("Sorted Desc: " + sortedDesc.join(", "));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

if (typeof random35 === "undefined") {
    printOut("Feil: random35 finens ikke. kjør part 8 først!");
} else {
    const counts = new Map();
    for (const n of random35) counts.set(n, (counts.get(n) || 0) + 1);

    printOut("Number: frequency");
    const numberAsc = [...counts.keys()].sort((a, b) => a - b);
    for (const n of numberAsc) {
        printOut(`${n}: ${counts.get(n)}`);
    }
    printOut(newLine);

    const freqMap = new Map();
    for (const [num, freg] of counts) {
        if (!freqMap.has(freg)) freqMap.set(freg, []);
        freqMap.get(freg).push(num);
    }

    const freqDesc = [...freqMap.keys()].sort((a, b) => b - a);
    printOut("Frequency: numbers");
    for (const freg of freqDesc) {
        const nums = freqMap.get(freg).sort((a, b) => a - b);
        printOut(`${freg}: ${nums.join(", ")}`);
    }
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const rows = 5;
const cols = 9;
const grid = [];

for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
        row.push((r + 1) * (c + 1));
    }
    grid.push(row);
}

printOut("Grid rows");
for (let r = 0; r < grid.length; r++) {
    printOut(grid[r].join(", "));
}
printOut(newLine);

printOut("Grid celles");
for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
        printOut(`Row ${r}, Col ${c}: ${grid[r][c]}`);
    }
}

printOut(newLine);
