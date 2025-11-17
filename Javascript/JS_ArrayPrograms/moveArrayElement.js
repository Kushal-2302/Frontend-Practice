// Move Array Element
function moveElement(array, fromIndex, toIndex) {
  // Remove the element from the original position
  const element = array.splice(fromIndex, 1)[0];

  // Insert it at the new position
  array.splice(toIndex, 0, element);

  return array;
}
console.log(moveElement([10, 20, 30, 40, 50], 4, 2)); 
