const range = function (start, end, step){
  let myArr = [];
  if (start > end || step <= 0 || start == undefined || end == undefined || step == undefined){
    return myArr
  } else {
    for (let i = start; i <= end; i += step){
      myArr.push(i);
    }
  }
  
  return myArr;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(1, 5, 0));
console.log(range(8, 5, 0));
console.log(range());