function readFileAsync ( path, callback) {
    // ფაულის ასინქრონულად წაკითხვის სიმულაცია

    setTimeout(() => {
        const content = "File content";
        callback(content);
    }, 1000);
}

readFileAsync("/files/file.text", (error, content) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(content);
});