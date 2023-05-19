document.getElementById('login-button').addEventListener('click', function() {
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    const userPasswordField = document.getElementById('password');
    const userPassword = userPasswordField.value;
    if (userEmail == 'admin@admin.com' && userPassword == '123456') {
        window.location.href = "dashboard.html";
    }
})
    