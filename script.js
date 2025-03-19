const validUsername = 'root';
const validPassword = 'Helloworld';
const encodedFlag = 'MHhBe3czQl9jSDQhIV80cjNfMzQ1eSF9';

function checkCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        const flag = atob(encodedFlag);
        document.getElementById('flag').innerText = flag;
        document.getElementById('flag').style.display = 'block';
    } else {
        alert('Incorrect username or password!');
    }
}
