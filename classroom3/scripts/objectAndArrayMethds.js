let myArray = ["blue", "red", "green", "yellow"];

// .join() example

let myArrayAsString = myArray.join(", ");
// alert(myArrayAsString);

//string.split() example

let myString = "blue, red, green ,yellow";
console.log(myString.split(", ")); // split() method takes a string as an argument and splits the string into an array of strings separated by the argument string //

// object. keys() example
const student = {
    name: "John Doe",
    age: 24,
    education: "Bsc Computer Science",
    hobbies: ["football", "basketball"]

}

console.log(Object.keys(student)); //object keys() method takes an object as an argument and returns an array of the object's keys

console.log(Object.values(student)); //object values () method takes an object as an argument and returns an array of the object's keys