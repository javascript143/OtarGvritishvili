let string = "html, css, javascript, react"; // შევქმენი სტრიქონი

let result = string.split(", "); // სტრიქონი გადავიყვანე მასივში

alert(Array.isArray(string)); // შევამოწმე საწყისი სტრიქონი
alert(Array.isArray(result)); // შავამოწმე სტრიქონი, რომ ნამდვილად იქცა მასივად

let reverseArray = result.reverse(); // უკუღმა შემოვატრიალე მასივი

let finalyResult = reverseArray.join(", ") // შემოტრიალებული მასივი გადავიყვანე სტრიქონად

alert(Array.isArray(finalyResult)); // შევამოწმე სტრიქონი, რომ აღარ იყო მასივი

console.log(finalyResult); // გამოვიტანე საბოლოო შედეგი: საწყისი სტრიქნონის შემოტრიალებული ვერსია