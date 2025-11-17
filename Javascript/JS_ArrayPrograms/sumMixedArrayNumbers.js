//Sum Numbers in Mixed Array
function sumNumbers(mixedArray) {
  let sum = 0;
  mixedArray.forEach(value => {
    if (typeof value === "number" && !Number.isNaN(value)) {
      sum += value;
    }
  });
  return sum;
}
// Test Data
console.log(sumNumbers([1, "hello", true, 5, NaN, 10]));    // 16
