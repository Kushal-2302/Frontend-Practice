
//Unique Elements from Two Arrays
function getUniqueValues(array) {
  
  const uniqueArray =  array.filter((value, index) => {
    return array.indexOf(value) === index;
    });
    return uniqueArray;
}
// Test Data
console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5]));     // [1, 2, 3, 4, 5]