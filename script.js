const quotes = [
    "Whoever loves discipline loves knowledge, but whoever hates correction is stupid --Proverbs 12:1 NIV",
    "Software is like sex: it's better when it's free --Linus Torvalds",
    "The easiest way to stop piracy is not by putting antipiracy technology to work. It's by giving those people a service that's better than what they're receiving from the pirates --Gabe Newell"
];

const quoteText = document.getElementById('quote-text');
let currentQuoteIndex = 0;

function typeQuote(quote) {
    const totalTypingDuration = 5000; // 5 seconds
    const charTypingInterval = totalTypingDuration / quote.length; // Adjust speed
    let charIndex = 0;

    function typeNextChar() {
        if (charIndex < quote.length) {
            quoteText.innerHTML += quote[charIndex];
            charIndex++;

            // Brief pause after punctuation
            const isPunctuation = ['.', ',', ';', '!', '?'].includes(quote[charIndex - 1]);
            setTimeout(typeNextChar, isPunctuation ? charTypingInterval * 2 : charTypingInterval);
        } else {
            setTimeout(changeQuote, 3000); // Pause before changing quote
        }
    }

    typeNextChar();
}

function changeQuote() {
    quoteText.innerHTML = ''; // Clear current quote
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Cycle through quotes
    typeQuote(quotes[currentQuoteIndex]);
}

// Start typing the first quote
typeQuote(quotes[currentQuoteIndex]);
