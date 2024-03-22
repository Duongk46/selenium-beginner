
document.querySelector('.form-submit').addEventListener('submit', async function (e) {
    e.preventDefault();
    let userName = document.querySelector('#floatingInput').value;
    let password = document.querySelector('#floatingPassword').value
    if (userName === "admin" && password === "Admin@123") {
        alert("Đăng nhập thành công");
    }
    else {
        alert("Đăng nhập thất bại")
    }
});

