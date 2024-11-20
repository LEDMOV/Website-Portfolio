// Quotes to display
const quotes = [
    "Whoever loves discipline loves knowledge, but whoever hates correction is stupid --Proverbs 12:1 NIV",
    "Software is like sex: it's better when it's free --Linus Torvalds",
    "The easiest way to stop piracy is not by putting antipiracy technology to work. It's by giving those people a service that's better than what they're receiving from the pirates --Gabe Newell"
];

// Selecting the elements where the quote will be typed
const quoteText = document.getElementById('quote-text');
const cursor = document.getElementById('cursor');

// Function to type out a quote
function typeQuote(quote) {
    quoteText.textContent = '';  // Clear previous quote
    let index = 0;
    const typingSpeed = 5000;  // Time to complete typing the quote (in milliseconds)
    const intervalTime = typingSpeed / quote.length;  // Calculate the speed based on quote length

    const typingInterval = setInterval(() => {
        quoteText.textContent += quote[index];
        index++;
        if (index === quote.length) {
            clearInterval(typingInterval);
            setTimeout(changeQuote, 3000); // Wait 3 seconds after quote finishes before changing
        }
    }, intervalTime);
}

// Function to change the quote after 3 seconds
function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    typeQuote(quotes[randomIndex]);
}

// Start by typing the first quote
typeQuote(quotes[0]);

// Set the quote typing to change every 8 seconds
setInterval(changeQuote, 8000);
