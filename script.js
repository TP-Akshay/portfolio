// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return; // Stop the function if validation fails
    }

    // Display thank you message
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';

    // Optionally, log the inputs to the console for verification
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form inputs
    this.reset();

    // Hide the thank you message after 5 seconds
    setTimeout(() => {
        thankYouMessage.style.display = 'none';
    }, 5000);
});
