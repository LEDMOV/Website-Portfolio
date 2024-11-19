const quotes = [
    "Whoever loves discipline loves knowledge, but whoever hates correction is stupid --Proverbs 12:1 NIV",
    "Software is like sex: it's better when it's free --Linus Torvalds",
    "The easiest way to stop piracy is not by putting antipiracy technology to work. It's by giving those people a service that's better than what they're receiving from the pirates --Gabe Newell"
];

const quoteDisplay = document.getElementById('quote-display');
let quoteIndex = 0;

function typeQuote(quote) {
    const typingSpeed = 5000 / quote.length; // Adjust speed to fit 5 seconds
    let charIndex = 0;

    function type() {
        if (charIndex < quote.length) {
            const char = quote[charIndex];
            quoteDisplay.innerHTML += char;
            charIndex++;
            const delay = (char === "." || char === "," || char === "!") ? 400 : typingSpeed;
            setTimeout(type, delay);
        } else {
            // Pause after typing then show the next quote
            setTimeout(() => showNextQuote(), 3000);
        }
    }
    quoteDisplay.innerHTML = ""; // Clear previous quote
    type();
}

function showNextQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length; // Cycle through quotes
    typeQuote(quotes[quoteIndex]);
}

// Start with the first quote
typeQuote(quotes[quoteIndex]);
