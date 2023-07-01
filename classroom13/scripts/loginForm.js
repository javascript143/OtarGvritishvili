import { generateString } from"./stringGenerator";

function handleLogin() {
    let savePasswordIsChecked = document.getElementById('savePassword').checked;
    let loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);

    let userExsists = false;

    let timeNow = new Date();

    timeNow.setTime(timeNow.getTime() + 5 * 24 * 60 * 60 * 1000)

    let atTime =  timeNow.toUTCString();

    for (let user = 0; user < usersData.length; user++) {
        if (usersData[user].username === username && usersData[user].password === password) {
            let sessionToken = generateString(36);

            if (savePasswordIsChecked) {
                document.cookie = `sessionToken=${sessionToken};expires=${atTime};path=/`
            } else {
                sessionStorage.setItem('sessionToken', sessionToken);
            }
            usersData[user].sessionToken = sessionToken;
            userExsists = true;
        };
    };

    if (userExists) { 
        window.location.href = './loginSuccess.html';
    }
    else {
        window.location.href = './loginFailed.html';
    }

}



[{"firstName":"goga","lastName":"ugulava","username":"gogexa123","password":"gogunia123","sessionToken":"oOq1JE9meV6iRG5s9OWiCVj46TvPgX82VaxF"},{"firstName":"nina","lastName":"gudushauri","username":"ninoNina","password":"niniko123","sessionToken":"Od0sxiKmJtKsMbKxgGjrxVS4rNbokMgylxLY"},{"firstName":"nika","lastName":"gogechava","username":"nika123","password":"nikanika123","sessionToken":"dz6S0iMD99GxurAdHq3opmpXdmhKvh7YaWk9"}]