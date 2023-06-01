function submitUsername() {
    let username = document.getElementById("usernameInput").value;

if (username == "") {
    document.getElementById("result").innerHTML =
    "please enter username";
} else if (username.length < 3) {
    document.getElementById("result").innerHTML =
    "username must be at least 3 characters long.";
} else if (username == "admin") {
    document.getElementById("result").innerHTML = 
    "logger in as admin";
} else {
    document.getElementById("result").innerHTML =
    "invalid username";
}

    console.log(username);
}