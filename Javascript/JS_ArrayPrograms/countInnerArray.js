//Count Arrays Inside Array
function countInnerArrays(mainArray) {
  const countingArray =  mainArray.reduce((count, value) => {
    if (Array.isArray(value)) {
      count++;
    }
    return count;
  }, 0);
  return countingArray;
}
// Test Data
console.log(`total arrays inside main array is ${countInnerArrays([1, [2, 3], "hello", [4, 5], 6])}`); 
