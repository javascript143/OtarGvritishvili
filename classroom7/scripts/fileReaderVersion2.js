function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const content = event.target.result;
            resolve(content);
        };

        reader.onerror = (event) => {
            reject(event.target.error);
        };

        // console.log(file.type);
        if (file.type.startWidth("text")) {
            reader.readAsText(file);
        } else if (file.type.startWidth("image")) {
            reader.readAsDataURL(file);
        } else {
            reject("Unsupported file type: " + file.type);
        }

        // reader.readAsText(file);
    });
}

function displayImage(content) {
    const output = document.getElementById("output");
    output.innerHTML = `<img src="${content}" alt="image" />`; // template string
}

function handleFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    const output = document.getElementById("output");

    if(!file) { // undefined, null, 0, "", NaN, false ==> ნიშნავს პირობის არ შესრულებას
        output.style.color = "red";
        output.innerHTML = "Error no file selected!";
        return; // აქ წყდება ფუნქციის მუშაობა
    }

    readFileAsync(file).then((fileContent) => {
        if (file.type.startsWith("text")) {
            output.innerHTML = fileContent;
        } else if (file.type.startsWith("image")) {
            displayImage(fileContent);
        }
    }).catch((error) => {
        output.style.color = "red";
        output.innerHTML = "Error: " + error;
    });
}