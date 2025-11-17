//Remove Specific Element
function removeSpecificElement(array, element){
  return array.filter(item => item !== element);
}
console.log(removeSpecificElement([7, 8, 9, 10, 5, 3], 8));
