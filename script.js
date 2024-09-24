document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Perform basic validation
    if (username === 'user' && password === 'pass') {
        alert('Login successful');
        window.location.href = "https://Youtube.com"
        // You can redirect the user or perform other actions here
    } else {
        alert('Invalid username or password');
    }
});
