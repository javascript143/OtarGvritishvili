/*
შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის 
კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: 
Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.
*/

let type = "javasctipt";

function firstUpperCase(type) {
return (type[0].toUpperCase() + type.slice(1, type.length));
}

console.log(firstUpperCase(type));