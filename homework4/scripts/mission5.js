/*
შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში 
დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, 
და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, 
Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე 
იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 
5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
*/

let count = 0;
while (count < 100) {

    count = count + 1;

    if ( count % 3 == 0) {
        if (count % 5 == 0) {
            console.log(count + " FizzBuzz");
        } else {
            console.log(count + " Fizz");
        }
    } else if ( count % 5 == 0) {
        console.log(count + " Buzz");
    } else {
        console.log(count);
    }
}