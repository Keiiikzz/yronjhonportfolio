const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}

const phrases = ["Computer Engineer", "Front End Developer", "Graphic Designer"];
let currentPhrase = 0;
let currentLetter = 0;
let typingElement = document.getElementById('typing');

function typeEffect() {
    if (currentLetter < phrases[currentPhrase].length) {
        typingElement.textContent += phrases[currentPhrase].charAt(currentLetter);
        currentLetter++;
        setTimeout(typeEffect, 150); // Adjust typing speed here
    } else {
        setTimeout(deleteEffect, 1000); // Wait for 1 second before deleting
    }
}

function deleteEffect() {
    if (currentLetter > 0) {
        typingElement.textContent = phrases[currentPhrase].substring(0, currentLetter - 1);
        currentLetter--;
        setTimeout(deleteEffect, 100); // Adjust deleting speed here
    } else {
        currentPhrase = (currentPhrase + 1) % phrases.length; // Cycle through phrases
        setTimeout(typeEffect, 500); // Start typing again after a short delay
    }
}

window.onload = typeEffect; // Start typing effect when the page loads
