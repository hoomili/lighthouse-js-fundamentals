const arr = [];
let copyArr = [...arr];
if (arr.find(item => item === 1)) {
  const index = arr.indexOf(4)
  copyArr.splice(index,1)
} else {
  copyArr = [...arr, 1]
}
console.log(copyArr);