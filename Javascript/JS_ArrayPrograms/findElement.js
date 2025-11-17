//Find Element in Array
function findElement(arr, element) {
  let elementFound =  arr.find(item => item === element);
    return (elementFound !== undefined) ? "Element found" : "Element not found";
}
console.log(findElement([7, 8, 9, 10], 2)); 
