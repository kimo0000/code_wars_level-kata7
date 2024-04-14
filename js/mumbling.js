function accum(str) {
// Methode 1:
// let result = '';
// let obj = {};
// for (let i = 0; i < str.length; i++) {
//   obj[str[i]] = i + 1;
// }

// for (const key in obj) {
//     result += `${key.toUpperCase()}${key.repeat(obj[key]-1).toLowerCase()}-`;
// }

// return result.slice(0, -1);

// Methode 2:
// let result = ""
// let strLower = str.toLowerCase();
// for (let i = 0; i < strLower.length; i++) {
//     result += `${strLower[i].toUpperCase()}${strLower[i].repeat(i)}-`;
// }
// return result.slice(0, -1);

// Methode 3:
// let result = "";
// return str
//          .toLowerCase()
//          .split('')
//          .map((el, i, arr) => result = el.toUpperCase() + el.repeat(i))
//          .join('-')

// Methode 4:
let strLower = str.toLowerCase();
return strLower
  .split("")
  .map((el, i, arr) => el.repeat(i + 1).replace(arr[i], arr[i].toUpperCase()))
  .join('-');
}

console.log(accum("Abc"));