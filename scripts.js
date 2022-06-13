import quotes from './quotes.js';

const quotePara = document.createElement("p");
const authorPara = document.createElement("p");

const quoteDiv = document.getElementById('quote-div');
const authorDiv = document.getElementById('author-div');
const newQuoteBtn = document.getElementById('new-quote-btn');

let printedQuote = getQuote();
getQuote();
quotePara.innerHTML = printedQuote.quote;
authorPara.innerHTML = printedQuote.author;

quoteDiv.appendChild(quotePara);
authorDiv.appendChild(authorPara);

newQuoteBtn.addEventListener("click", (event) => {
  printedQuote = getQuote();
  quotePara.innerHTML = printedQuote.quote;
  authorPara.innerHTML = printedQuote.author;
})

function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

//console.log(getQuote())
