const repeatNumbers = function(data) {
  let repeated = "";
  let i = 0;
  while (i < data.length){
    if (i > 0){
      repeated += ", ";
    }
    for (let j = 0; j < data[i][1]; j++){
      repeated += data[i][0].toString();
    }

    i++
    
  }
  return repeated;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));