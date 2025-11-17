// Function to fill an array with numbers from start to end with a given step
function fillArrayNumbers(start, end, step = 1) {
  if (typeof start !== "number" || typeof end !== "number") {
    return "Both start and end must be numbers";
  }
  if (step === 0) {
    return "Step cannot be 0";
  }
  let result = [];
  // Ascending range
  if (start <= end) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } 
  // Descending range
  else {
    for (let i = start; i >= end; i -= step) {
      result.push(i);
    }
  }
  return result;
}
console.log(fillArrayNumbers(1, 15, 3));   // [1, 3, 5, 7, 9]
// console.log(fillArrayNumbers(10, 1, 3));   // [10, 7, 4, 1]
// console.log(fillArrayNumbers(5, 5));       // [5]
