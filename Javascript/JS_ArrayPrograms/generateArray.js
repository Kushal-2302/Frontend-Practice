// Generate Integer Range Array
function generateArray(start, length){
  const newArray =  Array.from({length}, (element,index) => start + index );
  return newArray;
}
console.log(generateArray(3, 8));
