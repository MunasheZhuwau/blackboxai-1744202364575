// Admin credentials (for demo purposes only)
const ADMIN_CREDENTIALS = {
    username: "Munashe Zhuwau",
    password: "Munaji321"
};

// Check if user is logged in
function checkAuth() {
    return localStorage.getItem('isAuthenticated') === 'true';
}

// Login function
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials!');
    }
});

// Logout function
document.getElementById('logoutBtn')?.addEventListener('click', function() {
    localStorage.removeItem('isAuthenticated');
    window.location.href = 'admin.html';
});

// Protect dashboard route
if (window.location.pathname.includes('dashboard.html') && !checkAuth()) {
    window.location.href = 'admin.html';
}
