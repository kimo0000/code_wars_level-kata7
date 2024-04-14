String.prototype.toJadenCase = function () {
  // Methode 1:
//   return str.split(' ')
//             .map(el => el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase())
//             .join(' ');

  // Methode 2:
//   let result = "";
//   let strSplited = str.split(" ");
//   for (let i = 0; i < strSplited.length; i++) {
//     result += strSplited[i][0].toUpperCase() + strSplited[i].slice(1).toLowerCase() + " ";
//   }
//   return result.slice(0, -1);

  // methode 3:
//   return str.split(' ')
//             .map(el => el.substring(0, 1).toUpperCase() + el.substring(1, str.length).toLowerCase())
//             .join(' ');

  // Methode 4:
//   return str
//     .split(" ")
//     .map(
//       (el) =>
//         el.substr(0, 1).toUpperCase() + el.substr(1, str.length).toLowerCase()
//     )
//     .join(" ");

// Methode 5:
return str.match(/\w+/ig)
          .map(el => el.slice(0,1).toUpperCase() + el.slice(1, str.length).toLowerCase())
          .join(' ');
}

let str = "hello there you are welcome";
console.log(str.toJadenCase());