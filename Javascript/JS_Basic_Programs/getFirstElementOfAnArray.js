// Write a JavaScript function to check whether an `input` is an array or not.

const is_array = (input) => {
    if(toString.call(input) === "[object Array]"){
        return true;
    }
    return false;
};
// console.log(is_array('kushal'));
// console.log(is_array([5,6,7,8,9]));



// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
first =  function(array, valueCheck) {
      if (array == null) 
      return undefined;
    if (valueCheck == null) 
      return array[0];
    if (valueCheck < 0)
      return [];
    return array.slice(0, valueCheck);
  };

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));


//Write a simple JavaScript program to join all elements of the following array into a string.
const myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor);
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));



const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];

// Create a new Set from the array to automatically remove duplicates
const uniqueNumsSet = new Set(nums);

// Convert the Set back to an array using the spread operator
const uniqueNumsArray = [...uniqueNumsSet];

// Output the array with duplicates removed
console.log(uniqueNumsArray);