const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
wordLetters = document.querySelector(".wordLetters span"),
guessLeft = document.querySelector(".guess-left span"),
wrongLetter = document.querySelector(".wrong-letter span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");
const KeysList = document.querySelectorAll("#alphabet input[type='button']");
let word, maxGuesses, incorrectLetters = [], correctLetters = [];

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 7 : 5;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;
    
    function stringGen(len) {
      var text = "";
      var charset = "abcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length)).toUpperCase();
      return text;
   }
   
    
      //split word's characters
   let extraLetters = word + (stringGen(15));
   var wordSplit = extraLetters.split("")
        // Shuffle/Scramble the words Characters
   for(var i = wordSplit.length - 1; i > 0; i--){
      let j = Math.floor(Math.floor(Math.random() * ( i + 1 )));
       [wordSplit[i], wordSplit[j]] = [wordSplit[j], wordSplit[i]]
        }
        // group the scrambled characters
        var scrambled = wordSplit.join("").toUpperCase();

for (let i = 0; i < KeysList.length; i++){
  KeysList[i].style.display = "none";
  if (scrambled.includes("A")) {
  KeysList[0].style.display = "inline";
}
  if (scrambled.includes("B")) {
  KeysList[1].style.display = "inline";
}
  if (scrambled.includes("C")) {
  KeysList[2].style.display = "inline";
}
  if (scrambled.includes("D")) {
  KeysList[3].style.display = "inline";
}
  if (scrambled.includes("E")) {
  KeysList[4].style.display = "inline";
}
  if (scrambled.includes("F")) {
  KeysList[5].style.display = "inline";
}
  if (scrambled.includes("G")) {
  KeysList[6].style.display = "inline";
}
  if (scrambled.includes("H")) {
  KeysList[7].style.display = "inline";
}
  if (scrambled.includes("I")) {
  KeysList[8].style.display = "inline";
}
  if (scrambled.includes("J")) {
  KeysList[9].style.display = "inline";
}
  if (scrambled.includes("K")) {
  KeysList[10].style.display = "inline";
}
  if (scrambled.includes("L")) {
  KeysList[11].style.display = "inline";
}
  if (scrambled.includes("M")) {
  KeysList[12].style.display = "inline";
}
  if (scrambled.includes("N")) {
  KeysList[13].style.display = "inline";
}
  if (scrambled.includes("O")) {
  KeysList[14].style.display = "inline";
}
  if (scrambled.includes("P")) {
  KeysList[15].style.display = "inline";
}
  if (scrambled.includes("Q")) {
  KeysList[16].style.display = "inline";
}
  if (scrambled.includes("R")) {
  KeysList[17].style.display = "inline";
}
  if (scrambled.includes("S")) {
  KeysList[18].style.display = "inline";
}
  if (scrambled.includes("T")) {
  KeysList[19].style.display = "inline";
}
  if (scrambled.includes("U")) {
  KeysList[20].style.display = "inline";
}
  if (scrambled.includes("V")) {
  KeysList[21].style.display = "inline";
}
  if (scrambled.includes("W")) {
  KeysList[22].style.display = "inline";
}
  if (scrambled.includes("X")) {
  KeysList[23].style.display = "inline";
}
  if (scrambled.includes("Y")) {
  KeysList[24].style.display = "inline";
}
  if (scrambled.includes("Z")) {
  KeysList[25].style.display = "inline";
}
}



    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

function initGame(e) {
    let key = e.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
            alert(`Congrats! You found the word ${word.toUpperCase()}`);
            return randomWord();
        } else if(maxGuesses < 1) {
            alert("Game over! You don't have remaining guesses");
            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());