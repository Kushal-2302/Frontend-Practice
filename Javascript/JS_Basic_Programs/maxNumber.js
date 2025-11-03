//Create a function that finds the maximum number in an array
let Max;
let arr1 = [7,5,2,9,8];
for(var i=0; i<arr1.length; i++){
  if(arr1[i] > arr1[i+1]){
    Max = arr1[i];
  }
}
console.log(Max);