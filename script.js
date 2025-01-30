// Get the toggle button and body element
const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;

// Check if dark mode is stored in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

// Toggle dark mode when the switch is clicked
toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    }
});




document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Example of form validation
    if (name && email && message) {
        alert("Form Submitted Successfully!\n" + "Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

        // Reset the entire form
        document.querySelector("form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});

