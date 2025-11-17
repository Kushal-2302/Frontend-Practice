let firstElement=(arr,n)=> {
  if(arr==null){
    return "null";
  }else if(n==null){
    arr[0];
  }else if(n<0){
    return [];
  }else{
    return arr.slice(-n);
  }
  
}
console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([],3));
console.log(firstElement([7, 9, 0, -2],3));
console.log(firstElement([7, 9, 0, -2],-3));
