const quotes = [
    "Whoever loves discipline loves knowledge, but whoever hates correction is stupid --Proverbs 12:1 NIV",
    "Software is like sex: it's better when it's free --Linus Torvalds",
    "The easiest way to stop piracy is not by putting antipiracy technology to work. It's by giving those people a service that's better than what they're receiving from the pirates --Gabe Newell"
];

const quoteContainer = document.getElementById("quote-text");
const cursor = document.getElementById("cursor");

let currentQuoteIndex = 0;
let typingInterval;
let isTyping = false; // To avoid overlapping typing

// Function to calculate dynamic typing speed
function calculateTypingSpeed(quoteLength) {
    return 5000 / quoteLength; // Typing should take 5 seconds for each quote
}

// Function to type out the quote
function typeQuote(quote) {
    if (isTyping) return; // Prevent multiple typing intervals

    let index = 0;
    const typingSpeed = calculateTypingSpeed(quote.length);

    // Clear previous content
    quoteContainer.innerHTML = "";
    cursor.style.opacity = 1;
    isTyping = true;

    typingInterval = setInterval(() => {
        if (index < quote.length) {
            quoteContainer.textContent += quote[index];

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
            // After typing, wait 3 seconds before changing quote
            setTimeout(() => {
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Cycle through quotes
                typeQuote(quotes[currentQuoteIndex]);
            }, 3000);
        }
    }, typingSpeed);

    function typeNextChar() {
        if (index < quote.length) {
            quoteContainer.textContent += quote[index];
            index++;
        }
    }
}

// Start typing the first quote
typeQuote(quotes[currentQuoteIndex]);

// Make the caret blink
setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '1' ? '0' : '1';
}, 500);
