//Remove the spaces found in a string
let name = "   kushal kumar";
let newname = "";
for(var i=0; i<name.length; i++){
  if(name[i] === " "){
    continue;
  } else{
    newname += name[i]
  }
}
console.log(newname);