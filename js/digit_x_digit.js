function squareDigits(num) {
// Methode 1:
return Number(String(num).split('').map(el => el*el).join(''));

// Methode 2:
// let newArr = [];
// let numArr = String(num).split("");
// for (let i = 0; i < numArr.length; i++) {
//   newArr.push(numArr[i]*numArr[i]);
// }
// return Number(newArr.join(''));

// Methode 3:
// let newArr = [];
// let numArr = String(num).split("");
// for (const num of numArr) {
//     newArr.push(num*num);
// }
// return Number(newArr.join(''));
}

console.log(squareDigits(9119));