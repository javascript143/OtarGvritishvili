function readFileAsyncUsingPromises(path) {
    return new Promise((resolve, reject) => {
           // ფაილის ასინქრონულად წაკითხვის სიმულაცია
    setTimeout(() => {
        const content = "file content";
        resolve(content);
    }
    , 1000);
});
}

readFileAsyncUsingPromises('/files/file.txt').then((content) => {
    console.log("Content: " + content);
}).catch((error) => {
    console.error(error);
});