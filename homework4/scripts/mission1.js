// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// option one
let count = 2; 
while (count < array.length) {
    console.log(array[count]);
    count = count + 3;
}

//option two
for (let count = array[1]; count < array.length; count = count + 3) {
    alert(array[count]);
}

