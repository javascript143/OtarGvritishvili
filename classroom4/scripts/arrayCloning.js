let names = ["John", "Jane", "Mary", "Mike", "Matt", "Sevasti"];

let shadowCopy1 = names.slice();
shadowCopy1.pop();
console.log(names);
console.log(shadowCopy1);

let shadowCopyV2 = [...names]; // spread operators
shadowCopyV2.pop();
console.log(names);
console.log(shadowCopyV2);

let shadowCopyV3 = Array.from(names);
shadowCopyV3.pop();
console.log(names);
console.log(shadowCopyV3);