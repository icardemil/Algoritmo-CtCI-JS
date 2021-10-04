const createDict = (str) => {
  const dict = [...str].reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  return dict;
};

const checkPermute = (str1, str2) => {
  if (str1.length === str2.length) {
    const dict1 = createDict(str1);
    const dict2 = createDict(str2);
    return (
      Object.entries(dict1).toString() === Object.entries(dict2).toString()
    );
  } else {
    return false;
  }
};

console.log(checkPermute("aba", "aab"));

console.log(checkPermute("abaa", "aaba"));

console.log(checkPermute("aba", "aac"));
