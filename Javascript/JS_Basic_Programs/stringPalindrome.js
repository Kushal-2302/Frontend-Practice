// check whether String is Palindrome or not

const isPalindrome = str => {
    for(let i=0 ; i<str.length/2 ; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }                   
    }
    return true;
}
console.log(isPalindrome("mada")); // Output: true