// Option 1
function converter() {

   let celsius = 1;
   
   return celsius * 9/5 + 32 + " °F";
}

let converterResult = converter();
alert(converterResult);




// Option 2
function converterSecondOption(celsius2) {

    return celsius2 * 9/5 + 32 + " °F";
}

let converterResult2 = converterSecondOption(6);
console.log(converterResult2);