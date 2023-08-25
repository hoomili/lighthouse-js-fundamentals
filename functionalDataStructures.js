// const anArrayMixedElements = [1, "hello", 80, "world", 24, "javascript", 6, 99, "LHL", 12, "bootcamp", 45, 3];

// const filteredArray = anArrayMixedElements.filter(item => {
//   if (typeof item === 'number') {
//     return true;
//   }
//   return false;
// });

// console.log(filteredArray);
// const higherThanFifty = filteredArray.find(item => item > 50);

// console.log(higherThanFifty);

// const sumOfAllNumbers= filteredArray.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(sumOfAllNumbers);

const listOfBooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'fiction',
    published: 1925,
    pages: 180
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'fiction',
    published: 1951,
    pages: 224
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'fiction',
    published: 1960,
    pages: 281
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'fiction',
    published: 1949,
    pages: 328
  },
 {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
    genre: 'fiction',
    published: 1968,
    pages: 210
  },

];

const findLongestBookPublishedBefore = (year, books) => {
  const filteredBooks = books.filter(item => item.published < year);
  const longestBook = filteredBooks.reduce((accumulator, currentValue) => {
    let biggest = null;
    if (accumulator.pages > currentValue.pages) {
      biggest = accumulator;
    } else {
      biggest = currentValue;
    }
    return biggest;
  });
  return { title: longestBook.title, author: longestBook.author }
};
console.log(findLongestBookPublishedBefore(1960, listOfBooks));