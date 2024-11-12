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


// Initialize EmailJS with your public key
(function(){
    emailjs.init("RWZm_LoD7iXbPDW4y"); // Replace with your public key
})();

// Function to send email
function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Create a template parameters object
    const templateParams = {
        from_name: fullname,
        from_email: email,
        phone: phone,
        subject: subject,
        message: message,
    };

    // Send the email
    emailjs.send("service_ts8c96x", "template_4mqzz99", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
            // Clear the form
            document.querySelector("form").reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send email. Please try again.');
        });
}
