/*
შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე 
მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => 
რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ 
this string is not blank-ს თუ ცარიელი არაა.
*/
 

let testSrting = "";
// let testSrting = "notBlank";

function blankStringChecker(testSrting) {

if (testSrting.length == 0) {
    return "This string is blank";
} else if (testSrting.length > 0) {
    return "This string in not blank";
}
}

console.log(blankStringChecker(testSrting));




