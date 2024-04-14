function descendingOrder(num) {
// Methode 1:
// return Number(num.toString().split('').sort((a,b) => b-a).join(''))

// Methode 2:
return parseInt(Array(...String(num)).sort((a,b) => b-a).join(''));
}

console.log(descendingOrder(829));