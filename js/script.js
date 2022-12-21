/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//I used stackoverflow to help me with ideas for this project, I hope that is an within the rules.

var quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lenon",
    
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    
  },
  {
    quote: "What an old man sees while lying down, a young man can never see even when he climbs up in a tree..",
    source: "Nigerian Proverb",
    
  },
  {
    quote: "I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion.",
    source: "Alexander the Great",
    
  },
  {
    quote: "There never was a good war or a bad peace.",
    source: "Benjamin Franklin",
    year: 1783,
  },
  {
    quote: "If there is no struggle, there is no progress.",
    source: "Fredrick Douglas",
    citation: "West India Emacipation",
    year: 1857,
    
  }
];



// I added and deleted colors 

var CSS_COLOR_NAMES = ["Blue", "Chinese Violet", "Brown", "BurlyWood", "Lavender Blush", "Chocolate", "Amethyst Purple", "Lime", "Crimson", "Orange", "Baby Blue", "Magenta", "WhiteSmoke", "MintCream"];

var quoteIndex = 0;
var colorIndex = 0;
var quotesUsed = [];
var intervalID;

// const keyword is not supported in IE
var NUMBER_OF_QUOTES = 6;
var CHANGE_INTERVAL = 10000;


// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function emptyQuotesArray() {
  quotesUsed = [];
  console.log("Emptied queue; Start fresh.");
}

function allQuotesUsed() {
  return (quotesUsed.length === NUMBER_OF_QUOTES);
}

function getRandomQuote() {

  do {

    quoteIndex = getRandomIntInclusive(0, 5);

  } while (quotesUsed.includes(quoteIndex));

  quotesUsed.push(quoteIndex);

  logQuoteToConsole(quoteIndex);

  if (allQuotesUsed()) {
    emptyQuotesArray();
  }

  return quotes[quoteIndex];
}

function getRandomColor() {

  colorIndex = getRandomIntInclusive(0, CSS_COLOR_NAMES.length - 1);
  return CSS_COLOR_NAMES[colorIndex];
}

function logQuoteToConsole(quoteIndex) {
  console.log(quoteIndex, ': ', quotes[quoteIndex].quote.slice(0, 20));
}

function formatQuote(quote) {

  var formattedQuote =
    '<p class="quote">' + quote.quote + '</p>' +
    '<p class="source">' + quote.source;

  // http://stackoverflow.com/questions/27509/detecting-an-undefined-object-property

  if (typeof quote.citation !== "undefined") {
    formattedQuote += '<span class="citation">' + quote.citation + '</span>';
  }
  if (typeof quote.year !== "undefined") {
    formattedQuote += '<span class="year">' + quote.year + '</span>';
  }
  if (typeof quote.tags !== "undefined") {
    formattedQuote += '<p class="tags">' + quote.tags.join(', ') + '</p>';
  }

  formattedQuote += '</p>';
  return formattedQuote;

}

function changeBackground() {

  document.getElementById("bgcolor").style.backgroundColor = getRandomColor();

}

function resetTimer() {

  if (intervalID) {
    window.clearInterval(intervalID);
    intervalID = setInterval(printQuote, CHANGE_INTERVAL);
  }

}

function printQuote() {

  resetTimer();
  document.getElementById('quote-box').innerHTML = formatQuote(getRandomQuote());
  changeBackground();

}

printQuote();

// set the interval to change the quote to the defined interval
intervalID = window.setInterval(printQuote, CHANGE_INTERVAL);


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);