function fearNotLetter(str) {
  const source = str.split("").map((huruf) => huruf.charCodeAt(0));
  const compare = [];
  const awal = str.charCodeAt(0);
  const akhir = str.charCodeAt(str.length - 1);
  for (let i = awal; i <= akhir; i++) {
    compare.push(i);
  }
  const result = +compare.filter((angka) => !source.includes(angka)).join("");
  return result ? String.fromCharCode(result) : undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
