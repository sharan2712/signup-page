// Quotes Array
const quotes = [
    "“Success is not the key to happiness. Happiness is the key to success.”",
    "“Don’t watch the clock; do what it does. Keep going.”",
    "“Success usually comes to those who are too busy to be looking for it.”",
    "“Opportunities don't happen. You create them.”",
    "“Your time is limited, so don’t waste it living someone else’s life.”"
];

// Display Random Quote
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
        alert("Please fill out all fields!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Signup successful!");
    document.getElementById("signupForm").reset();
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}