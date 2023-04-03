const camelCase = function(input) {
  let camelCase = "";
  for (let i = 0; i < input.length; i++){
    if (input[i] === " "){
      camelCase += input[(i + 1)].toUpperCase();
      i++
    } else {
      camelCase += input[i];
    }
  }
  return camelCase;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));