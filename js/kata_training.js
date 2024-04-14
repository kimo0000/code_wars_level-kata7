function XO(str) {
// Methode 1:
// let CharO = str.toLowerCase().split('').filter(el => el == "o");
// let CharX = str.toLowerCase().split('').filter(el => el == "x");
// return CharO.length == CharX.length;

// Methode 2:
// let charO = [];
// let charX = [];
// let strLower = str.toLowerCase();
// for (let i = 0; i < strLower.length; i++) {
//    strLower[i] == "o" ? charO.push(strLower[i]) : "";
//    strLower[i] == "x" ? charX.push(strLower[i]) : "";
// }
// return charO.length == charX.length;

// Methode 3:
return (
  str.match(/[x]?/gi).join("").length == str.match(/[o]?/gi).join("").length
);
}

console.log(XO("bgvOXxOox"));