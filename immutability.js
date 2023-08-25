//Objects
const object = {
  key: "Value of Key",
};

const copyOfObject = { ...object };

//Arrays
const arrayOfNumbers = [1, 2, 3, 4, 5];

const copyArrayOfNumbers = [...arrayOfNumbers];

arrayOfNumbers.push(6);
console.log(copyArrayOfNumbers)

object.hello = 'yes';
console.log(copyOfObject);