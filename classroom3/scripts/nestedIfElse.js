let = waterStorage = "full";
let = carryWater = true;
let = connectToSink = true;

//nested if else example

if (waterStorage == 'full') {
    if(carryWater == true) {
        if (connectToSink == true) {
            alert('Task completed');
        } else if (connectToSink == false) {
            alert('Please connect water bank to sink');
        } else {
            alert('Task not complated');
        }
    } else if (carryWater == false) {
        alert('Please carry water');
    } else {
        alert("Task not completed");
    };

}  else if (waterStorage == 'empty') {
    alert ('Please fill water bank');
} else {
    alert('Task not completed');
}

