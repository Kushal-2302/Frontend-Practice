//Array Between Two Integers
function range(start, end) {
  const length = end - start + 1;
  const newArray =  Array.from({ length }, (element, index) => {
    // console.log(element,index);
    let currentElement = start + index;
    return currentElement;
  });
  return newArray;
}
// console.log(range(3, 8));   // [3, 4, 5, 6, 7, 8]
console.log(range(-2, 2));  // [-2, -1, 0, 1, 2]
