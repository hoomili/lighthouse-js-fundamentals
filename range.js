const range = function (start, end, step){
  let myArr = [];
  for (let i = start; i <= end; i += step){
    myArr.push(i);
  }
  return myArr;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));