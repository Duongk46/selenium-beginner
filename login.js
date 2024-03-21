
document.querySelector('.form-submit').addEventListener('submit', async function (e) {
    e.preventDefault();
    const loginApi = await fetch("https://localhost:7096/api/Auth/Login", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: document.getElementById('floatingInput').value,
            password: document.getElementById('floatingPassword').value
        })
    });
    const res = await loginApi.json();
    if (res.status == 200) {

    }
    else {
        alert('Tài khoản không tồn tại!');
    }
});

