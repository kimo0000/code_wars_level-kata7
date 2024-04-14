function getTheMiddle(str) {
// Methode 1:
if(!str.length) return "String Is Empty!";

// return str.length == 1
//   ? str.charAt(0)
//   : str.length % 2 == 0
//   ? str.charAt(str.length / 2 - 1) + str.charAt(str.length / 2)
//   : str.charAt(Math.floor(str.length / 2));

// methode 2:
let evenlength = str.length / 2;
let oddLength = parseInt(str.length / 2);
return str.length == 1
  ? str[0]
  : str.length % 2 == 0
  ? str.charAt(evenlength - 1) + str.charAt(evenlength)
  : str.charAt(oddLength);
}

console.log(getTheMiddle('haker'));
