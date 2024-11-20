const quotes = [
    "Whoever loves discipline loves knowledge, but whoever hates correction is stupid --Proverbs 12:1 NIV",
    "Software is like sex: it's better when it's free --Linus Torvalds",
    "The easiest way to stop piracy is not by putting antipiracy technology to work. It's by giving those people a service that's better than what they're receiving from the pirates --Gabe Newell"
];

const quoteContainer = document.getElementById("quote-container");

let currentQuoteIndex = 0;
let typingInterval;

// Function to calculate dynamic typing speed
function calculateTypingSpeed(quoteLength) {
    // Total typing time is 5 seconds, distribute time equally across characters
    return 5000 / quoteLength; // in milliseconds
}

// Function to type out the quote
function typeQuote(quote) {
    let index = 0;
    const typingSpeed = calculateTypingSpeed(quote.length);

    // Clear previous content
    quoteContainer.innerHTML = "<span id='quote'></span><span class='blinking-caret'>|</span>";
    const quoteElement = document.getElementById("quote");

    typingInterval = setInterval(() => {
        if (index < quote.length) {
            quoteElement.textContent += quote[index];

            // Add a slight pause for punctuation
            if (quote[index] === "." || quote[index] === "," || quote[index] === "—") {
                clearInterval(typingInterval);
                setTimeout(() => {
                    typingInterval = setInterval(() => {
                        typeNextChar();
                    }, typingSpeed);
                }, 300); // 300ms pause for punctuation
            }
            index++;
        } else {
            clearInterval(typingInterval);
            // After 3 seconds, change to the next quote
            setTimeout(() => {
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Cycle through quotes
                typeQuote(quotes[currentQuoteIndex]);
            }, 3000);
        }
    }, typingSpeed);

    function typeNextChar() {
        if (index < quote.length) {
            quoteElement.textContent += quote[index];
            index++;
        }
    }
}

// Start typing the first quote
typeQuote(quotes[currentQuoteIndex]);
