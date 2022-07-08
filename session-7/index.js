// ****************************************************TASK 1****************************************************
const animals = ['cat', 'dog', 'wolf', 'lion', 'eagle', 'zebra'];
animals.pop();

console.log(animal);














// ****************************************************TASK 2****************************************************

const animals = ['cat', 'dog', 'wolf', 'lion', 'eagle', 'zebra'];

animals.sort();

animals.reverse();

console.log(animal);

const names = ['Sarah', 'Jane', 'Gemma', 'josh', 'Aisha', 'Danait', 'Luke', 'Connor', 'Alaia', 'Cieran'];

names.sort();

names.reverse();

console.log(names);

//bonus

const numbers = ['5', '325', '67', '100000', '150'];

numbers.sort();

console.log(numbers);









// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];


// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
//function compare(a, b) {
  //return a.age - b.age;
//}

people.sort((a, b) => {
  return a.age - b.age;
}
);
let names = [];

for (let index = 0; index < people.length; index++) {
  names.push(people[index].name)
}

console.log(names);