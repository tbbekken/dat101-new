"use strict"
import {printOut} from "../../common/script/utils.mjs";

///const textTrue = "dette er sant";
///const textFalse = "dette er usant";

const text1 = "Du kan ta med deg en som er under 18";
const text2 = "Du kan gå på kino";
const text3 = "Beklager, kom tilbake når du er eldre";

const ageMovie = 16;
const ageBring = 18;
let age1 = 19; // gammel nok til å ha med seg en person under 16 år
let age2 = 14; // for ung til å gå på kino alene

if(age1 > age2){
    const age1Old = age1;
    age1 = age2;
    age2 = age1Old;
}

if (age1 >= ageMovie){
    printOut("Person 1: " + text2);
    if (age2 >= ageMovie) {
            printOut("Person 2: " + text2);
    } else if (age1 >= ageBring){
            printOut("Person 1: " + text1);
            printOut("Person 2: " + text2);
    } else {
            printOut("Person 2: " + text3);
    }
}

//if (age1 >= ageMovie){
   // printOut (text2);
//}

//if (age2 >= ageMovie){
//    printOut (text2);
//}


//if (age> ageMovie){
    //printOut(tekstTrue);
//} else {
  //  printOut (tekstFalse);
//}

///if(age1 == ageMovie){
   /// printOut (text1);
///} else if (age1 > ageMovie){
    //printOut (text2);
//} else {
  //  printOut (text3);
//}