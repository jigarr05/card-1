// Get the card element
const card = document.getElementById('flip-card');

// Add click event listener to toggle rotation
card.addEventListener('click', () => {
  // Toggle the flip class
  card.classList.toggle('is-flipped');
});