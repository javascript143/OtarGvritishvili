// function  sumAllArrays(array1=[], array2=[], array3=[]) {
//     let sumOfArray1Items = array1.length;
//     let sumOfArray2Items = array2.length;
//     let sumOfArray3Items = array3.length;

//     return sumOfArray1Items + sumOfArray2Items + sumOfArray3Items;
// }



// let result = sumAllArrays([1, 2, 3], [1, 2, 3, 4]);
// alert(result);

// arrow functions

const  sumAllArraysArrowFunctions = (array1=[], array2=[], array3=[]) => {
    let sumOfArray1Items = array1.length;
    let sumOfArray2Items = array2.length;
    let sumOfArray3Items = array3.length;

    return sumOfArray1Items + sumOfArray2Items + sumOfArray3Items;
}



let result = sumAllArraysArrowFunctions([1, 2, 3], [1, 2, 3, 4]);
alert(result);