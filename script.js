// List of quotes
const quotes = [
    "Whoever loves discipline loves knowledge, but whoever hates correction is stupid --Proverbs 12:1 NIV",
    "Software is like sex: it's better when it's free --Linus Torvalds",
    "The easiest way to stop piracy is not by putting antipiracy technology to work. It's by giving those people a service that's better than what they're receiving from the pirates --Gabe Newell"
];

// Function to select and type out the quote
function displayQuote() {
    const quoteSection = document.getElementById('quote-display');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; // Random quote selection

    let i = 0;
    const typingSpeed = 100; // Speed of typing effect (milliseconds)
    
    // Clear any existing text before starting
    quoteSection.innerHTML = '';
    
    // Type out the quote
    function typeWriter() {
        if (i < randomQuote.length) {
            quoteSection.innerHTML += randomQuote.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    
    typeWriter();
}

// Call the displayQuote function when the page loads
window.onload = displayQuote;
