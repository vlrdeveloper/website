// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {

    // Get the login form and the face image elements
    const loginForm = document.getElementById('loginForm');
    const faceImg = document.getElementById('faceImg');
    const errorMessage = document.getElementById('error-message');

    // Sample username and password for validation
    const correctUsername = 'salman';
    const correctPassword = '123456';

    // Event listener for form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check the credentials
        if (username === correctUsername && password === correctPassword) {
            // Change to happy face image
            faceImg.src = 'happy.png';  // Replace with the path to your happy face image assetn';

            // Wait for 3 seconds, then redirect
            setTimeout(function() {
                window.location.href = 'welcome.html';  // Redirect to another page
            }, 3000);

        } else {
            // Change to angry face image
            faceImg.src = 'angry.png';

            // Display error message
            errorMessage.textContent = 'Incorrect username or password. Please try again.';
        }
    });
});
