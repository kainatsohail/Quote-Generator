const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');
const tweetBtn = document.getElementById('tweetBtn');

const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso"
  },
  {
    text: "Stay hungry. Stay foolish.",
    author: "Steve Jobs"
  }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.innerText = `"${quote.text}"`;
  quoteAuthor.innerText = `- ${quote.author}`;
  updateTweetButton(quote);
}

function updateTweetButton(quote) {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;
  tweetBtn.setAttribute('href', tweetUrl);
}

function copyToClipboard() {
  const fullQuote = `${quoteText.innerText} ${quoteAuthor.innerText}`;
  navigator.clipboard.writeText(fullQuote);
  copyBtn.innerText = "✅ Copied!";
  setTimeout(() => {
    copyBtn.innerText = "📋 Copy";
  }, 1500);
}

// Event Listeners
newQuoteBtn.addEventListener('click', getRandomQuote);
copyBtn.addEventListener('click', copyToClipboard);

// Load first quote
getRandomQuote();