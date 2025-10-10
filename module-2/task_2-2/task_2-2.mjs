"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const Part1ans = 2 + 3 * (2 - 4) * 6;
printOut ("2 + 3 * (2 - 4) * 6 = " + Part1ans);


printOut(newLine);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const meters = 25 
const centimeters = 34

let millimeters = meters * 1000 + centimeters * 10
let inches = millimeters / 25.4

printOut(meters + " meters and " + centimeters + " centimeters are " + inches.toFixed(2) + " inches.");


printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let days = 3
let hour = 12
let minutes = 14 
let seconds = 45

let totaltMinuttes = days * 24 * 60 + hour * 60 + minutes + seconds / 60

printOut (days + " days, " + 
    hour + " hours, " + 
    minutes + " minutes and " + 
    seconds + " seconds are " + 
    totaltMinuttes.toFixed(2) );
printOut(" minutes in total.");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part4Minutes = 6322.52;

let part4Rest = part4Minutes / (24 * 60);
const part4Days = Math.floor(part4Rest);

part4Rest = part4Rest - part4Days;
part4Rest = part4Rest * 24;
const part4Hours = Math.floor(part4Rest);

part4Rest = part4Rest - part4Hours;
part4Rest = part4Rest * 60;
const Part4Minutes = Math.floor(part4Rest);

part4Rest -= Part4Minutes;
part4Rest *= 60;
const part4Seconds = Math.floor(part4Rest);

printOut (part4Minutes + " minutes are " 
    + part4Days + " days, " + 
    part4Hours + " hours, " + Part4Minutes 
    + " minutes, " + "  and at last " + 
    part4Seconds + " seconds.");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const dollar = 54;
const nok = 76;
const usd = 8.6;

let usdToNokRate = nok / usd;
let dollarToNok = dollar * usdToNokRate;

let nokToUsdRate = usd / nok;
let kronerToUsd = dollarToNok * nokToUsdRate;


printOut(dollar + " USD = " + Math.round(dollarToNok) + " NOK.");
printOut(Math.round(dollarToNok) + " NOK = " + kronerToUsd + " USD");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const tekst = "there is much between heaven and earth that we do not understand";
const tekstLenght = tekst.length;

printOut(" Numbers of characters in the text = " + tekstLenght);
printOut(" Character at the position 19 = " + tekst.charAt(19) );
printOut(" Caracter at the position 35 = " + tekst.charAt(35) + " and 8 = " + tekst.charAt(8));
printOut(" The index at witch earth starts in the text = " + tekst.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut ("Is 5 > 3? " + (5 > 3));
    
printOut ("Is 7 >= 7? " + (7 >= 7));

printOut (" is a > b? " + ('a' > 'b'));

printOut ("Is 1 < a ? " + ('1' < 'a'));

printOut ("Is 2500 < abcd? " + ('2500' < 'abcd'));

printOut( "arne != thomas? " + ( "arne" != "thomas"));

printOut ("Is 2 == 5? " + (2 == 5 ));

printOut ("Is abcd > bcd? " + !("abcd" > "bcd" ));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut (Number ("254"));
printOut (Number ("57.23"));
printOut (Number ("25 kroner"));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor (Math.random() * 360 ) + 1; 

printOut(r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part10Days = 131;

let week10 = Math.floor(part10Days / 7);
let restdays10 = part10Days % 7;

printOut("131 days is " + week10 + " weeks " + " and " + restdays10 + " days.");

printOut(newLine);