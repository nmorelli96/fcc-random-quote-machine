import quotes from './quotes.js';

const loadingScr = document.getElementById("preloader");
const backgroundVid = document.getElementById("background");
const music = document.getElementById('music');
const ambience = document.getElementById('ambience');

const musicIcon = document.getElementById('music-icon');
const ambienceIcon = document.getElementById('ambience-icon');
const musicMute = document.getElementById('music-mute');
const ambienceMute = document.getElementById('ambience-mute');

const quotePara = document.getElementById("quote-para");
const authorPara = document.getElementById("author-para");

const quoteBox = document.getElementById('quote-box');
const quoteDiv = document.getElementById('text');
const authorDiv = document.getElementById('author');

const newQuoteBtn = document.getElementById('new-quote');

getQuote();

newQuoteBtn.addEventListener("click", (event) => {
  quoteBox.classList.toggle('quoteBoxAnim');
  setTimeout(function () {
    getQuote();
  }, 1000);
  setTimeout(function () {
    quoteBox.classList.toggle('quoteBoxAnim');
  }, 2000);

  console.log(quotes.length);
})

function getQuote() {
  let quoteIndex = [Math.floor(Math.random() * quotes.length)];
  let printedQuote = quotes[quoteIndex];
  quotePara.innerHTML = '"' + printedQuote.quote + '"';
  authorPara.innerHTML = printedQuote.author;
  //console.log(quoteIndex);
  //console.log(printedQuote);
  quotes.splice(quoteIndex, 1);
  //console.log(quotes)
  if (quotes.length == 0) {
    window.location.reload();
  }

  $('#tweet-quote').attr(
    'data-text',
    `“` + quotePara.textContent.replace(/"/g, "") + `” \n \n` + ` - ` + authorPara.textContent + ` #quotes \n`
  );
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

window.addEventListener("load", function () {
  loadingScr.classList.toggle('fadeOutAnim');
  setTimeout(function () {
    loadingScr.style.display = "none";
  }, 950);
});



$(document).ready(function () {
  checkSwitch();
  $("#liveBG").click(function () {
    checkSwitch();
  });
});

function checkSwitch() {
  let check = $("#liveBG").prop('checked');
  if (check == true) {
    $("#background").get(0).play();
  }
  else {
    $("#background").get(0).pause();
  }
}