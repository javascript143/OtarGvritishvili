// მოცემული მასივიდან
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.


let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
let namesWithoutBob = [];
let namesWithoutBobInAlert= [];

// Option 1
count = 0;
while (count < names.length) {
    if (names[count] != 'Bob') {
        namesWithoutBob.push(names[count]);
    } 
    count = count + 1;
}
console.log(namesWithoutBob);

//Option 2 
for (count = 0; count < names.length; count = count + 1) {
    if (names[count] != 'Bob') {
        namesWithoutBobInAlert.push(names[count]);
    }
}
alert(namesWithoutBobInAlert);