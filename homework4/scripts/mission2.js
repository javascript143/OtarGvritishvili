//შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

// Option 1
count = 10;
while (count >= 1) {
    console.log(count);
    count = count - 1;
}

// Option 2
for (count = 10; count > 0; count = count - 1) {
    alert(count);
}