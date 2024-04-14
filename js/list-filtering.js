function filterList(list) {
// Methode 1:
// return list.filter(el => typeof el === "number");

// Methode 2:
// return list.filter(el => Number.isInteger(el));
}

console.log(filterList([1,2, "ad", "1", "123", 123]));