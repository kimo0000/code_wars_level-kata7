function hightAndLow(numbers) {
// Methode 1:
// let arrNum = numbers.split(" ");
// let min = Math.min(...arrNum);
// let max = Math.max(...arrNum);
// return String(max) + " " + String(min);

// Methode 2:
// let min = numbers
//   .split(" ")
//   .map((el) => Number(el))
//   .filter((el, i, arr) => el == Math.min(...arr));
// let max = numbers.split(' ')
//                  .map(el => Number(el))
//                  .filter((el, i, arr) => el == Math.max(...arr));
// console.log(String(min), +max);
// return `${String(max)} ${String(min)}`;

// Methode 3:
// let numbersArr = numbers.split(' ').map((el) => Number(el));
// let max, min;
// for (const num of numbersArr) {
//   max = Math.max(...numbersArr);
//   min = Math.min(...numbersArr);
// }
// return String(max) + " " + min.toString();

// Methode 4:
let final = numbers.split(' ').map((el) => Number(el)).sort((a,b) => a - b);
return  final.slice(-1) + " " + final.slice(0,1);
}

console.log(hightAndLow('1 2 3 4 45 -20 5 -8 12'));