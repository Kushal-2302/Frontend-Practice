//Remove Non-Alphabetic Characters
const removeNonAlpha = str =>{
    let result = "";
    for(let i=0; i<str.length; i++){
        if((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')){
            result += str[i];
        }
    }
    return result;
}
console.log(removeNonAlpha("kushal123 !@#")); // Output: kushal