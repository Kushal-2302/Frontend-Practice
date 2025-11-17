// Find NaN Indexes in Array
function getNaNIndexes(arr) {
  let indexes = [];
  return arr.forEach((value, index) => {
    if (Number.isNaN(value)) {
      indexes.push(index);
    }
   
  }, []);
   return indexes;
}
// Test Data
console.log(getNaNIndexes([2, NaN, 8, 16, 32]));       // [1]
console.log(getNaNIndexes([2, 4, NaN, 16, 32, NaN])); // [2, 5]
console.log(getNaNIndexes([2, 4, 16, 32]));           // []


// Function to get all indexes of NaN in an array
function getNaNIndexes(arr) {
  let count = 0;
  const currentReturnValue =  arr.reduce((indexes, value, index) => {
    if (Number.isNaN(value)) {
      indexes.push(index);
      count = count + 1;
    }
    return indexes;
  }, []);
  console.log(` total number of NaN is ${count}`);
  return currentReturnValue;
}
// Test Data
console.log(getNaNIndexes([2, NaN, 8, 16, 32, NaN]));      
