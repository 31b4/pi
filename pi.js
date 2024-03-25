function calculatePiDigits(iterations) {
    let number = '';

    // Generate 10000 random digits
    for (let i = 0; i < 1000; i++) {
        number += Math.floor(Math.random() * 10); // Append a random digit (0-9)
    }

    return number;
}

// Function to fetch more digits of pi and update display
function updatePiDisplay() {
    const newDigits = calculatePiDigits(); // Adjust the number of iterations as needed
    const piContainer = document.getElementById('content');
    piContainer.textContent += newDigits;
}

// Function to check if user is close to the last item
function isCloseToLastItem() {
    const lastItem = document.getElementById('last-item');
    if (!lastItem) return false;
    const rect = lastItem.getBoundingClientRect();
    return rect.top - window.innerHeight <= 50; // Adjust this value as needed
}

// Event listener to trigger fetching more pi digits when user is close to the last item
window.addEventListener('scroll', function() {
    if (isCloseToLastItem()) {
        updatePiDisplay()
    }
});

// Initial check for updating pi digits
if (isCloseToLastItem()) {
    updatePiDisplay();
}


updatePiDisplay()