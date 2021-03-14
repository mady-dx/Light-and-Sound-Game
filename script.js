//global constants
const clueHoldTime = 1000; //how long to hold each clue light sound
const cluePauseTime = 333; //how long to pause in btwn clues
const nextClueWaitTime = 1000; //how long to wait to start playback of clue sequence

//global variables:
var pattern = [];
var progress = 0; //how many guesses total users at
var gamePlaying = false; //are we still playing the game
var tonePlaying = false; //is the song playin
var volume = 0.5; //between 0.0-1.0
var guessCounter = 0; //how many guesses we making rn

function createArray(pat) {
  for (let i = 0; i <= 9; i++) {
    var pNum = (Math.floor(Math.random() * 10));
    if(pNum == 0)
      pat[i] = 1;
    else
      pat[i] = pNum;
  }
}

function startGame() {
  //initialize variables
  createArray(pattern);
  progress = 0;
  gamePlaying = true;
  //swap start and stop button; document= index.html, classList= reference to the css file
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  //play game
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  //swap start and stop button; document= index.html, classList= reference to the css file
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 200.0,
  2: 220.6,
  3: 240.6,
  4: 261.6,
  5: 329.6,
  6: 392,
  7: 466.2,
  8: 534.2,
  9: 596.8
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("btn" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("btn" + btn).classList.remove("lit");
}

//next functions are for clues
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) return;

  if (pattern[guessCounter] == btn) {
    //checks if the btn is equal to the pattern at the designated spot
    if (guessCounter == progress) {
      //is the guess counter equal to the progress of hte game
      if (progress == pattern.length - 1)
        //did we reach the end of the game?
        winGame();
      //if yay we win
      else {
        //next clue plays
        progress++;
        playClueSequence();
      }
    } else {
      //we still have to guess the next clue
      guessCounter++;
    }
  } else {
    //wrong button pressed
    loseGame();
  }
}

//when you lose
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congrats! You won!");
}
