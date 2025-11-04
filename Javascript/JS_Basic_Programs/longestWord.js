// Finding logest word in String

const longestWord = str => {
    let word = "";
    let longest = "";
    for(let i = 0; i <= str.length; i++){
        if(str[i] !== " " && i !== str.length){
            word += str[i];
        }else{
            if(word.length > longest.length){
                longest = word;
            }
            word = "";
        }
    }
    return longest;
}
console.log(longestWord("My name is Kushal")); // Output: Kushal




// const longestWord = sentence => {
//   let word = "", longest = "";
//   for (let i = 0; i <= sentence.length; i++) {
//     if (sentence[i] !== " " && i !== sentence.length) {
//       word += sentence[i];
//     } else {
//       if (word.length > longest.length) longest = word;
//       word = "";
//     }
//   }
//   return longest;
// };
// console.log(longestWord("My name is Kushal")); // Output: Kushal
    