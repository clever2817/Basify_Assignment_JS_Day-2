// Problem-1 (Sum of Numbers)

function sum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sum(5));

// Problem-2 (Object Properties)

let book = {
  title: "Rich Dad Poor Dad",
  author: "Robert Kiosaki",
  year: 2005,
};

function objPrint(obj) {
  console.log(
    `Title: [${obj.title}], Author: [${obj.author}], Year: [${obj.year}]`
  );
}

objPrint(book);

// Problem-3 (Array Reversal)

let numArr = [1, 2, 3, 4, 5];

function arrayReverse(array) {
  let newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }

  return newArr;
}

console.log(arrayReverse(numArr));
