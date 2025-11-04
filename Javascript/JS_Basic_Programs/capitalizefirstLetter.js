// Capitalize First Letter in string

const capitalizeFirst = str => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += i === 0
      ? (str[i] >= 'a' && str[i] <= 'z' ? String.fromCharCode(str[i].charCodeAt(0) - 32) : str[i])
      : str[i];
  }
  return result;
};
console.log(capitalizeFirst("bangarpet")); // Output: Kushal