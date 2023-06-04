let person = {
    name: "Giorgi",
    birthYear: 1995,
    age: function() {
        return 2023 - this.birthYear;
    }
}
console.log(person.age());