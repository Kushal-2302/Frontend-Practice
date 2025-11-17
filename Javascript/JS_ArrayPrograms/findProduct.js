//Product of odd elements in the array
const findProduct = (arr) =>{
  let product = 1;
  for(let i=1;i<arr.length;i += 2){
    product *= arr[i];
  }  
  return product;
}
console.log(`Product of odd elements ${findProduct([4,8,1,4,3,9])}`)
