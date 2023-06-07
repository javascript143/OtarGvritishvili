/* 
შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. 
მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს 
“Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]
*/

// let myString = "HTML, CSS, JavaScript, React"
// console.log(myString);

// let stringToArray = myString.split(" ");
// console.log(stringToArray);


let testString = "HTML, CSS, JavaScript, React";
function stringToArray(testString) {
    return testString.split(" ");
}
console.log(stringToArray(testString));