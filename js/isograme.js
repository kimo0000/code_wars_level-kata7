function isIsograme(str) {
  if (!str.length) return true;

  // Methode 1:
//   let strlower = str.toLowerCase();
  // let newArray = [];
  // for (let i = 0; i < strlower.length; i++) {
  //     !newArray.includes(str[i]) ? newArray.push(str[i]) : "";
  // }
  // return str.length != newArray.length ? false : true;

  // Methode 2:
//   return str.toLowerCase().split("").every((el, i, arr) => arr.indexOf(el) == i);

  // Methode 3:
//   return new Set(str.toLowerCase()).size == str.length;

return /(.).*\1/.test(str);

}

console.log(isIsograme("abb"));