//Finding second maximum element in array
const findSecondMax = (arr) => {
  let max = 0;
  let secondMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
};
console.log("Second largest element : ", findSecondMax([7,2,9,4,8])); // 
