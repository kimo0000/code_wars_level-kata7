const isSqure = (n) => {
return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? true : false;
}

console.log(isSqure(4));