//Check if String Contains Substring

const containsSubstring = (str, sub) => {
  for (let i = 0; i <= str.length - sub.length; i++) {
    let match = true;
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
};
console.log(containsSubstring("kushal kumar", "kushal")); // Output: true