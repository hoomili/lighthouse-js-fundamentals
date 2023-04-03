const sumLargestNumbers = function(data) {
  let num1 = data[0];
  let num2 = data[0];
  let indexCounter = 0;
  for (let i = 0; i < data.length; i++){
    if (num1 < data[i]){
      num1 = data[i];
      indexCounter = i;
  }
}
  for (let j = 0; j < data.length; j++){
    if (num2 < data[j] && indexCounter !== j){
      num2 = data[j];
    }
  }
  let sum = num1 + num2;
  return [sum];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));