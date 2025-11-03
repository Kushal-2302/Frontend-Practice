// Create a function that filters out negative numbers
let arr2 = [7,5,-2,9,-1];
let newarr2 = [];
for(var i=0; i<arr2.length; i++){
  if(arr2[i] < 0){
    continue;
  }else{
    newarr2.push(arr2[i]); 
  }
}
console.log(newarr2);
console.log(arr2);