import quotes from './quotes.js';

const music = document.getElementById('music');
const ambience = document.getElementById('ambience');

const musicIcon = document.getElementById('music-icon');
const ambienceIcon = document.getElementById('ambience-icon');
const musicMute = document.getElementById('music-mute');
const ambienceMute = document.getElementById('ambience-mute');

const quotePara = document.createElement("p");
const authorPara = document.createElement("p");

const quoteDiv = document.getElementById('text');
const authorDiv = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

getQuote();

newQuoteBtn.addEventListener("click", (event) => {
  getQuote();
})

function getQuote() {
  let quoteIndex = [Math.floor(Math.random() * quotes.length)];
  let printedQuote = quotes[quoteIndex];
  quotePara.innerHTML = '"' + printedQuote.quote + '"';
  authorPara.innerHTML = printedQuote.author;
  quoteDiv.appendChild(quotePara);
  authorDiv.appendChild(authorPara);
  //console.log(quoteIndex);
  //console.log(printedQuote);
  quotes.splice(quoteIndex, 1);
  //console.log(quotes)
  if (quotes.length == 0) {
    window.location.reload();
  }
}

musicIcon.onclick = function controlMusic() {
  if (!music.paused) {
    music.pause();
    musicMute.style.display = "block";
  }
  else {
    music.play();
    musicMute.style.display = "none";
  }
}

ambienceIcon.onclick = function controlAmbience() {
  if (!ambience.paused) {
    ambience.pause();
    ambienceMute.style.display = "block";
  }
  else {
    ambience.play();
    ambienceMute.style.display = "none";
  }
}

//console.log(getQuote())
