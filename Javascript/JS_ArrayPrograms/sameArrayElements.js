//Pre-filled Numeric Array
function sameArrayElements(length, value){
  const newArray =  Array.from({length}, (element,index) => value );
  return newArray;
}
console.log(sameArrayElements(5, -8));
