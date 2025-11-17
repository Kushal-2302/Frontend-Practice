//Find maximum element in the array
const findMax = (arr) => {
  let max = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log("Maximum number:", findMax([88, 92, 79, 95, 85, 90])); 
