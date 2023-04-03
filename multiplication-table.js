const multiplicationTable = function(maxValue) {
  let table = "";
  let num = 0
  for ( let i = 1; i <= maxValue; i++){
    for (let j = 1; j <= maxValue; j++){
      num = i * j;
      table += (num.toString() + " ");
    }
    table += "\n"
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));