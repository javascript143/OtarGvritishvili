async function asyncFunc() {
    await setTimeout(() => {
        console.log("Download complate");
    }
    , 3000);
    console.log("Download Started");
}