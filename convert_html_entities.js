function convertHTML(str) {
  const obj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str
    .split("")
    .map((value) => (Object.hasOwn(obj, value) ? obj[value] : value))
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML('Stuff in "quotation marks"'));
