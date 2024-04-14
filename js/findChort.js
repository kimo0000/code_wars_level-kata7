function findChort(str) {
  // Methode 1:
  return Math.min(...str.match(/\w+/gi).map((el) => el.length));
}
