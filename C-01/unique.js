//Versión con diccionario O(n)
console.log("Con diccionario");
const isUnique = (string) => {
  const dict = [...string].reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  return Object.values(dict).every((el) => el === 1);
};

console.log(isUnique("abb"));
console.log(isUnique("12345677898"));
console.log(isUnique("ab"));

console.log("Sin diccionario");
//Vesion sin diccionario O(n^2)
const isUniqueW = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) return false;
    }
  }
  return true;
};

console.log(isUniqueW("abb"));
console.log(isUniqueW("12345677898"));
console.log(isUniqueW("ab"));
