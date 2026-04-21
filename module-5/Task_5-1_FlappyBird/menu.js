"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame, EGameStatus, hero, resetWorld, soundMuted } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu {
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spGetReady;
  #spGameOver;
  #spMedal;
  #spFinalScore;
  #spBestScore;
  #highScore;
  #soundMuted;

  constructor(aSpcvs, aSPI) {
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 185, 160);

    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 220, 250);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));

    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 270, 170);
    this.#spCountDown.visible = false;

    this.#sfCountDown = null;
    this.#sfRunning = null;

    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
    this.#spGameScore.hidden = true;

    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 190, 120);
    this.#spGetReady.index = 0;
    this.#spGetReady.hidden = true;

    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 150, 120);
    this.#spGameOver.hidden = true;

    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 175, 160);
    this.#spMedal.hidden = true;

    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 330, 155);
    this.#spFinalScore.hidden = true;

    this.#spBestScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 330, 200);
    this.#spBestScore.hidden = true;

    this.#highScore = 0;
    this.#soundMuted = soundMuted;
  }

  incGameScore(aScore) {
    this.#spGameScore.value += aScore;
  }

  resetGameScore() {
    this.#spGameScore.value = 0;
  }

  setSoundMute(aIsMuted) {
    this.#soundMuted = aIsMuted;

    if (aIsMuted) {
      if (this.#sfRunning) {
        this.#sfRunning.stop();
        this.#sfRunning = null;
      }

      if (this.#sfCountDown) {
        this.#sfCountDown.stop();
        this.#sfCountDown = null;
      }
    } else {
      if (EGameStatus.state === EGameStatus.gaming && !this.#sfRunning) {
        this.#sfRunning = new TSoundFile(fnRunning);
        this.#sfRunning.play();
      }
    }
  }

  stopSound() {
    if (this.#sfRunning) {
      this.#sfRunning.stop();
      this.#sfRunning = null;
    }

    if (this.#sfCountDown) {
      this.#sfCountDown.stop();
      this.#sfCountDown = null;
    }
  }

  hideGameOver() {
    this.#spGameOver.hidden = true;
    this.#spMedal.hidden = true;
    this.#spFinalScore.hidden = true;
    this.#spBestScore.hidden = true;
  }

  showGameOver() {
    this.stopSound();

    this.#spGetReady.hidden = true;
    this.#spCountDown.visible = false;
    this.#spGameScore.hidden = true;

    this.#spGameOver.hidden = false;
    this.#spPlayBtn.hidden = false;

    this.#spFinalScore.hidden = false;
    this.#spBestScore.hidden = false;

    this.#spFinalScore.value = this.#spGameScore.value;

    if (this.#spGameScore.value > this.#highScore) {
      this.#highScore = this.#spGameScore.value;
    }

    this.#spBestScore.value = this.#highScore;

    if (this.#spGameScore.value >= 3) {
      this.#spMedal.hidden = false;
      this.#spMedal.index = 0;
    } else if (this.#spGameScore.value >= 2) {
      this.#spMedal.hidden = false;
      this.#spMedal.index = 1;
    } else if (this.#spGameScore.value >= 1) {
      this.#spMedal.hidden = false;
      this.#spMedal.index = 2;
    } else {
      this.#spMedal.hidden = true;
    }
  }

  draw() {
    if (EGameStatus.state === EGameStatus.idle) {
      this.#spTitle.draw();
      this.#spPlayBtn.draw();
    }

    if (EGameStatus.state === EGameStatus.countDown) {
      this.#spGetReady.draw();
      this.#spCountDown.draw();
    }

    if (EGameStatus.state === EGameStatus.gaming || EGameStatus.state === EGameStatus.heroIsDead) {
      this.#spGameScore.draw();
    }

    if (EGameStatus.state === EGameStatus.gameOver) {
      this.#spGameOver.draw();
      this.#spPlayBtn.draw();

      if (!this.#spMedal.hidden) {
        this.#spMedal.draw();
      }

      this.#spFinalScore.draw();
      this.#spBestScore.draw();
    }
  }

  countDown() {
    this.#spCountDown.value--;

    if (this.#spCountDown.value > 0) {
      setTimeout(this.countDown.bind(this), 1000);
    } else {
      this.#spCountDown.visible = false;
      this.#spTitle.hidden = true;
      this.#spGetReady.hidden = true;

      if (this.#sfCountDown) {
        this.#sfCountDown.stop();
        this.#sfCountDown = null;
      }

      if (!this.#soundMuted) {
        this.#sfRunning = new TSoundFile(fnRunning);
        this.#sfRunning.play();
      }

      startGame();
    }
  }

  spPlayBtnClick() {
    if (EGameStatus.state === EGameStatus.gameOver) {
      hero.restart();
      resetWorld();
      this.resetGameScore();
      this.hideGameOver();
    }

    EGameStatus.state = EGameStatus.countDown;

    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true;
    this.#spGetReady.hidden = false;
    this.#spGameScore.hidden = false;

    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;

    if (!this.#soundMuted) {
      this.#sfCountDown = new TSoundFile(fnCountDown);
      this.#sfCountDown.play();
    }

    setTimeout(this.countDown.bind(this), 1000);
  }
}