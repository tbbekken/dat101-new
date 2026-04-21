"use strict";
import { computerAnswers, menu } from "./Mastermind.mjs";
import { playerAnswers } from "./colorPicker.js";
import { MastermindBoard } from "./MastermindBoard.mjs";

let hintRow = MastermindBoard.AnswerHint.Row1;

export function checkAnswer() {
  const c = [];
  for (let i = 0; i < computerAnswers.length; i++) {
    c.push(computerAnswers[i]);
  }

  const p = [];
  for (let i = 0; i < playerAnswers.length; i++) {
    p.push(playerAnswers[i]);
  }

  // 1. Test if player color is correctly placed.
  const correct = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i].index === c[i].index) {
      correct.push(i);
    }
  }

  // Remove correctly placed items from both lists.
  for (let i = 0; i < correct.length; i++) {
    p[correct[i]] = null;
    c[correct[i]] = null;
  }

  // 2. Test if player color exists in a different position.
  let wrongCount = 0;
  for (let i = 0; i < p.length; i++) {
    const pColor = p[i];
    let wrongIndex = -1;

    for (let j = 0; j < c.length; j++) {
      const cColor = c[j];
      if ((pColor && cColor) && (pColor.index === cColor.index)) {
        // This color is correct but in the wrong position.
        wrongCount++;
        wrongIndex = j;
        break;
      }
    }

    if (wrongIndex <= 0) {
      c.splice(wrongIndex, 1);
      i = 0;
    }
    
  }

  menu.createHints(correct.length, wrongCount);
}
