function findChort(str) {
// Methode 1:
// return Math.min(...str.match(/\w+/ig).map(el => el.length))

// Methode 2:
// return Math.min(...str.split(' ').map(el => el.length));

// Methode 3:
// let firstElLength = str.split(' ')[0];
// let strSplited = str.split(' ');
// let result = "";
// for (let i = 0; i < strSplited.length; i++) {
//   if(firstElLength.length >= strSplited[i].length) {
//      firstElLength = strSplited[i];
//   }
// }
// return firstElLength.length;

// Methode 4:
// return Number(str.split(' ').map(el => el.length).sort((a,b) => a-b).slice(0,1).join(''));
}

console.log(findChort('blacks t small is'));