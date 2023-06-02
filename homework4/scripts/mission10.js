/*
შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, 
რომლის ფუნქციონალი მდგომარეობს შემდგომში: 
მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი 
სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია
კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.
*/

let email = "otar.gvritishvili@gamil.com";
console.log(email);

let startIndex = email.indexOf(".");
let endIndex = email.indexOf("@");

let surname = email.substring(startIndex + 1, endIndex);

let dots = "";
let count = 0;
while (count < surname.length) {
    dots += ".";
    count = count + 1;
}
// console.log(dots);

let result = email.replace(surname, dots);
console.log(result);
