function validateLogin() {
    let username = document.getElementById('floatingInput').value;
    let password = document.getElementById('floatingPassword').value;
    
    if (username == 'admin@gmail.com' && password == '123') {
        alert('Login successful!');
    // Redirect to another page or perform other actions upon successful login
    } else {
        alert('Login failed. Please check your username and password.');
        return false;
    }
}