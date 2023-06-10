// async function loadDate() {

// let jsonLoader = await fetch("/sample.json");

// console.log(jsonLoader);
// }

async function loadData() {

    let jsonLoader = await fetch("/classroom8/sample.json"); // ჩავტვირთეთ sample.json ფაილი

    let jsonResult = await jsonLoader.json(); // გადავიყვანეთ ჩატვირთული ფაილი Json ფორმატში

    // გამოვიტანეთ შედეგი ეკრანზე
    // console.log(jsonLoader);
    // console.log(jsonResult.name);

    let userPrompt = prompt("Enter Json data");

    // ამ ფუნქციას (JSON.parse()) გადაყავს სტრონულ ფორმატში არსებული JSON-ი, JSON-ფორმატად.
    let parsedUserPrompt = JSON.parse(userPrompt);

    console.log(parsedUserPrompt.name);

    let jsonInStr = JSON.stringify(jsonResult);
    console.log(jsonInStr);
} 


loadData();