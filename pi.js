function calculatePiDigits(startIndex, count) {
    return Math.PI.toString().slice(2); // Returns digits of pi as a string, excluding the initial '3.'
}

// Function to fetch more digits of pi
function updatePiDisplay() {
    const newDigits = calculatePiDigits(100); // Adjust this value as needed
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
        for (let index = 0; index < 200; index++) {
            updatePiDisplay()
        }
    }
});

// Initial check for updating pi digits
if (isCloseToLastItem()) {
    updatePiDisplay();
}


for (let index = 0; index < 200; index++) {
    updatePiDisplay()
}