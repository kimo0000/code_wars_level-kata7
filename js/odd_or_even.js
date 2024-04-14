function oddOrEven(arr) {
if(!arr.length) return "even";

// Methode 1:
return (arr.reduce((acc, curr) => acc + curr ,0)) % 2 == 0 ? "even" : "odd";

// Methode 2:
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// return sum % 2 == 0 ? "even" : "odd";
}

console.log(oddOrEven([0]));