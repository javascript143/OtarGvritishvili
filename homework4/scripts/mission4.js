// ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: numberPower(number, power) და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

function numberPower(number, power) {
    if (power === 0) {
        result = 1;
        return result;
    } else if ( power != 0){

        let result = 1;
        count = 0;
        while (count < power) {
            result = result * number;
            count++;
        }
        return result;
    }
}
console.log(numberPower(4, 4));

