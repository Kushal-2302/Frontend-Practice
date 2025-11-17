//Filter Array Values
function filterValues(arr) {
  const filteredArray =  arr.filter(value => value !== false && value !== null && value !== 0 && value !== "");
  return filteredArray;
}
console.log(filterValues([0, 1, false, 2, "", 3, null, 4,"kushal"])); 
