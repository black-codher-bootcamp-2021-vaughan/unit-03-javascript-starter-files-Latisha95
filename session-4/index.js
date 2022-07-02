// ****************************************************TASK 1 - OBJECTS****************************************************
const personA = {
    name: 'Jane',
    location: 'Kent',
    age: 32,
    likes: 'baking'
}

const personB = {
    name: 'Taylor',
    location: 'Scotland',
    age: 22,
    likes: 'rock climbing'
}

const personC = {
    name: 'Martin',
    location: 'Birmingham',
    age: 41,
    likes: 'gardening'
}

const personD = {
    name: 'Lisa',
    location: 'Manchester',
    age: 21,
    likes: 'shopping'
}

console.log(personA.name);

function biography(person) {

    return "Hi, my name is " + person.name + " I am " + person.age + " years old, " + " i live in " + person.location "and i like " + person.likes;
};

console.log(biography(personA));
console.log(biography(personB));
console.log(biography(personC));
console.log(biography(personD));

//Helene's Example

const personA = {
    name: 'Ahoua',
    age: 25,
    location: 'Coventry',
    likes: 'decorating',
 };
 const personB = {
     name: 'Laura',
     age: 32,
     location: 'France',
     likes: 'painting',
  };
  const personC = {
     name: 'Harold',
     age: 22,
     location: 'Paris',
     likes: 'playing football',
  };
  const personD = {
     name: 'Karl',
     age: 52,
     location: 'London',
     likes: 'running',
  };
  function biography (person) {
 // 1st way :
 const {name, age, likes, location} = person
 //2nd way :
     // const name = person.name;
    // const age = person.age;
    // const location = person.location;
    // const likes = person.likes;
     return (`Hi, my name is ${name}. I am ${age} years old, I live in ${location} and I like ${likes}.`);
  }
 console.log(biography(personA))
 console.log(biography(personB))
 console.log(biography(personC))
 console.log(biography(personD))










// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

 const x = 6;
 const y = 4;

 const addition = x + y;

 console.log("Addition: x + y " + addition); // Addition: x + y = 10

 const subtraction = x - y;

 console.log("Subtraction: x - y " + subtraction); // Subtraction: x - y = 2

 const multiplication = x * y;

 console.log("Multiplication: x * y " + multiplication); // Multiplication: x * y = 24

 const division = x / y;

 console.log("Division: x / y " + division); // Division: x / y = 1.5

 const multiplication2 = x * x;

 console.log("Multiplication2: x * x " + multiplication2); //Multiplication: x * x = 36

 const addition2 = x + x + y;

 console.log("Adiition2: x + x + y " + addition2); // Addition: x + x + y = 16

 const sum = x * y / x;

 console.log("Sum: x * y / x " + sum); // Sum x * y / x = 4



 




// ****************************************************TASK 3****************************************************
const age = 24
const minimumAge = 18

 const isOld = age >= minimumAge

 console.log('Are you old enough? ' + isOld)


 //*************************************************Homework Calculator********************************************

 function add (x,y) {
     var z = x + y;
     return x + " + " + y + " = " + z;
 }

 // console.log(add (5,2));

 function sub(x, y) {
     var z = x - y;
     return x + " - " + y + " = " + z;   
 }

 // console.log(sub (4,2));

 function multi(x, y) {
     var z = x * y;
     return x + " * " + y + " = " + z;
 }

// console.log(multi (6,5));

function div(x, y){
    var z = x / y;
    return x + " / " + y + " = " + z;
 }

 //console.log(div(7,9));
 
 const calculator = {
     addition: add,
     subtraction: sub,
     multiplication: multi,
     division: div,
}

console.log(calculator.addition(3,5))
console.log(calculator.subtraction(8,5))
console.log(calculator.multiplication(10,5))
console.log(calculator.division(8,4))

//*******************************************************Homework Task 2*********************************************

function whoIsOlder(person1, person2) {
    var age = person1.age > person2.age;
    var ageDifference = person1.age - person2.age;
    return "Is " + person1.name + " older than " + person2.name + "? " + age + "." + " The difference of age is " +
}
console.log(whoIsOlder(personB, personC))





