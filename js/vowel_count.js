function vowelCount(str) {
// methode 1:
// return str.split('').filter(el => {
//     return el == "a" || el == "e" || el == "i" || el == "o" || el == "u";
// }).length;

// methode 2:
// let count = 0;
// str.split("")
//    .map(
//     (el) =>
//       el == "a" 
//       || el == "e" 
//       || el == "i" 
//       || el == "o"  
//       || el == "u" 
//       ? count+=1  
//       : ""
//     );
//   return count;

// Methode 3:
// let count  = 0;
// for (let i = 0; i < str.length; i++) {
//   str[i] == "a"
//         || str[i] == "e"
//         || str[i] == "i"
//         || str[i] == "o"
//         || str[i] == "u"
//         ? count++
//         : "";
// }
// return count;

// Methode 4:
// let count = 0;
// let arrStr = str.split('');
// for (let i = 0; i < arrStr.length; i++) {
//     arrStr[i].includes("a") ||
//     arrStr[i].includes("e") ||
//     arrStr[i].includes("i") ||
//     arrStr[i].includes("o") ||
//     arrStr[i].includes("u")
//       ? count++
//       : "";
// }
// return count;

// Methode 5:
return str.match(/[aeiou]/g).length;
}

console.log(vowelCount("abracadabra"));