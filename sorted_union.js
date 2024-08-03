function uniteUnique(...arr) {
  // const result = [];
  // arr.forEach((value) => value.forEach((num) => result.push(num)));
  // return Array.from(new Set(result));

  return Array.from(new Set(arr.flat()));
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
