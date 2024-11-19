// Quotes array
const quotes = [
    "Whoever loves discipline loves knowledge, but whoever hates correction is stupid --Proverbs 12:1 NIV",
    "Software is like sex: it's better when it's free --Linus Torvalds",
    "The easiest way to stop piracy is not by putting antipiracy technology to work. It's by giving those people a service that's better than what they're receiving from the pirates --Gabe Newell"
];

const quoteDisplay = document.getElementById("quote-display");

let currentIndex = 0;

function typeQuote() {
    const quote = quotes[currentIndex];
    const totalDuration = 5000; // Total time in ms
    const charDelay = totalDuration / quote.length; // Calculate delay per character
    let charIndex = 0;

    quoteDisplay.textContent = ""; // Clear the display
    const typingInterval = setInterval(() => {
        // Add the next character
        quoteDisplay.textContent += quote[charIndex];
        charIndex++;

        // Pause briefly for punctuation
        if ([".", ",", ":", ";", "!"].includes(quote[charIndex - 1])) {
            clearInterval(typingInterval); // Pause for punctuation
            setTimeout(() => typeNextChar(), 200); // Resume typing
        } else {
            typeNextChar();
        }

        function typeNextChar() {
            if (charIndex < quote.length) {
                charIndex++;
            } else {
                // Typing finished
                clearInterval(typingInterval);
                setTimeout(showNextQuote, 3000); // Wait 3 seconds before switching quotes
            }
        }
    }, charDelay);
}

function showNextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length; // Cycle through quotes
    typeQuote();
}

// Start typing the first quote
typeQuote();
