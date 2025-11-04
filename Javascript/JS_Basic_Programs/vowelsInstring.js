// Return the number of vowels in a string
let str = "kushal";
let count=0;
for(var i=0; i<str.length; i++){
  if(str[i] == ("a"||"A") || str[i] == ("e"||"E") || str[i] == ("i"||"I") || str[i] == ("o"||"O") || str[i] == ("u"||"U")){
    count = count + 1; 
  }
}
console.log(`Total vowels = ${count}`);