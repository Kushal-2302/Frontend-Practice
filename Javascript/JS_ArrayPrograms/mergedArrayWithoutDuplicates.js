//Merge Arrays Without Duplicates
function mergeArray(array1, array2){
  let mergedArray = array1.concat(array2);
  console.log(mergedArray);
   return mergedArray.filter((value, index) => mergedArray.indexOf(value) === index);
}
console.log(mergeArray([1,2,3,4,5],[4,5,6,7,8]));
