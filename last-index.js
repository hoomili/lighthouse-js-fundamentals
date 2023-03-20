function lastIndexOf (myArr, num){
  let indexTracking = [];
  for (let i = 0; i < myArr.length; i++){
    if (myArr[i] === num){
      indexTracking.push(i);
    }
  }
  if (indexTracking.length === 0){
    return -1;
  } else {
    return indexTracking[indexTracking.length - 1];
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);