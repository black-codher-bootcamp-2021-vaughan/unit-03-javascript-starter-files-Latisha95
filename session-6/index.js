// Use this randomNumber inside of the while/for loops to generate a random number
//const randomNumber = Math.round(Math.random() * 10);

// ****************************************************TASK 1****************************************************
let count = 0
while (count <= 10) {
    let randomNumber = Math.round(Math.random() * 10);
    count = count + 1;

    console.log('In the While ' + randomNumber);

}

console.log('Random number is: ' + randomNumber);













// ****************************************************TASK 2****************************************************

let count = 0;
let randomNumber = Math.round(Math.random() * 10);

for (let count; count < 10; count++) {
    randomNumber = randomNumber + 1
    count = count + 1;
}

console.log('For was here ' + randomNumber );





