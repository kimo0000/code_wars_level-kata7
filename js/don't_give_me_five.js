function dontGiveMeFive(start, end) {
// Methode 1:
let newArray = [];
for (let i = start; i <= end; i++) {
    if(!String(i).includes('5')) newArray.push(i);
}
return newArray.length;

// Methode 2:
// let newArray = [];
// while(start <= end) {
//     if(!String(start).includes('5')) newArray.push(start);
//     start++;
// }
// return newArray.length;

// Methode 3:
// let arr = Array.from(Array(end+1 - start), (_, i) => i+= start);
// return arr.filter(el => !String(el).includes('5')).length;
}

console.log(dontGiveMeFive(4,17));