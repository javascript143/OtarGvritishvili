let fruits = ["apple", "apple", "apple", "grape", "orange", "banana", "mango"];

let filteredFruits = [];

for(let fruit of fruits) {
    if (fruit !== "apple") {
        filteredFruits.push(fruit);
    }
}

// console.log(filteredFruits);

let filterFruitsV1 = fruits.filter(fruit => fruit !== "apple");
// console.log(filterFruitsV1);


let filterFruitsV2 = fruits.filter(function(fruit) {
    if(fruit === "apple") {
        return false;
    } else {
        return true;
    }
});
// console.log(filterFruitsV2);

function submitStudentData() {
    let studentNames = document.getElementById("studentNames").value;
    studentNames = studentNames.split(", ");

    let studentGraduationData = studentNames.map(student => student + " graduated on colage")
    // document.getElementById("result").innerHTML = studentGraduationData.join("<br> ");

    let studentGraduationDataV1 = studentNames.map(function(student) {
        return student + " graduated on colage";
    });
    // document.getElementById("result").innerHTML = studentGraduationDataV1.join("<br> ");

}

function submitForEachExample() {
    let studentData = document.getElementById("studentData").value;
    studentData = studentData.split(", ");

    studentData.forEach(function(student) {
        if (parseInt(student) < 18) {
            document.getElementById("result").innerHTML += student + " is not eligible to vote <br>"
        }
    })
}

function everyMetodExample () {
    let studentData = document.getElementById("studentData").value;
    studentData = studentData.split(", ");

    let areStudentNamesSaame = studentData.every(function(student) {
        return student === "giorgi";
    });

    if (areStudentNamesSaame) {
        document.getElementById("result").innerHTML = "All students are named the same name";
    } else {
        document.getElementById("result").innerHTML = "Not all students are names the same name";
    }


    let desiredName = "gela";

    let studentConteinDesiredName = studentData.some(function(student) {
        return student === desiredName;
    })
    
    if (studentConteinDesiredName) {
        document.getElementById("result").innerHTML += "<br> some sudents are named " + desiredName;
    }
}

function reduceMethodExample() {
    let studentSpendings = document.getElementById("studentData").value;

    studentSpendings = studentSpendings.split(", ");

    let totalSpendings = studentSpendings.reduce(function(accumulator, currentValue) {
        return parseInt(accumulator) + parseInt(currentValue);
    });

    document.getElementById("result").innerHTML = "Total spendings are: " + totalSpendings;
};
