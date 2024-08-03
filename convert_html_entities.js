function convertHTML(str) {
  // const obj = {
  //   "&": "&amp;",
  //   "<": "&lt;",
  //   ">": "&gt;",
  //   '"': "&quot;",
  //   "'": "&apos;",
  // };
  // return str
  //   .split("")
  //   .map((value) => (Object.hasOwn(obj, value) ? obj[value] : value))
  //   .join("");

  return str
    .split("")
    .map((value) => {
      switch (value) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&apos;";
        default:
          return value;
      }
    })
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML('Stuff in "quotation marks"'));
