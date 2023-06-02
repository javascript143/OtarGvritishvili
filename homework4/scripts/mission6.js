/* 
შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), 
რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის 
სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 
*/

function factorialCalculator(number) {
        
    let count = number;
    let result = 1;
    
    while ( count != 0 ) {
        result = result * count;
        count = count - 1;
    }
    return result;
}

console.log(factorialCalculator(5));