//Cadenas con muchos espacios al final
const urlify = (string) => {
  str1 = string.trim().split("");
  for (let idx in str1) {
    if (str1[idx] === " ") {
      str1[idx] = "%20";
    }
  }
  return str1.join("");
};

console.log(urlify("Hola mundo        "));
console.log(urlify("Mr John Smith"));

//Cadenas con muchos espacios en todas partes 🐱‍👓
const urlifyW = (string) => {
  const str2 = string.trim().replace(/\s+/g, "%20");
  return str2;
};

console.log(urlifyW("  Hola   mundo        "));
console.log(urlifyW("Mr John Smith"));
