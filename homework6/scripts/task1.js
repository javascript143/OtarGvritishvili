function submitFoodData() {
    let filterFoods = document.getElementById("foodNames").value;
    filterFoods = filterFoods.split(", ");

    let healthyResult = [];
    let notHealthyResult = [];
    let abc = filterFoods.filter(function(fruit) {
        if(fruit.includes("boiled")) {
            healthyResult.push(fruit);
            return healthyResult;
        } else {
            notHealthyResult.push(fruit);
            return notHealthyResult;
        }
    });
    console.log(healthyResult);
    console.log(notHealthyResult);
    let finalResult = "Some of the healthy foods you include are: " + healthyResult.join(", ") + ", but it is harmful to health: " + notHealthyResult.join(", ");
    document.getElementById("result").innerHTML = finalResult;
}