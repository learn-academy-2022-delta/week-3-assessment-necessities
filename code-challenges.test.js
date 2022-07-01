// ASSESSMENT 3: Coding Practical Questions with Jest

const { isTSEnumDeclaration } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

        // I'm going to declare a function named returnSpecificArray;
        // it will take one integer input called arrayLength;
        // and output a array called fibArray;
        // The output array will be the length equal to the input integer;
        //     to creat the array that length i will make a for loop and let it run as many times as the integer;
        //     the loop will append values to the new array for every iteration
        // every new value added to the array will be the next value of the fibbonaci sequence in order 

        // the fibonacci sequence is a spefic sequence found by adding 1 + 1 + sum + sum, etc so i will need to represent that as well - I will add the first two numbers then append the sum to the array, everytime the array runs i will add the newest value in the array to a variable then append the sum to the array again 

const returnSpecificArray = (arrayLength) => {
    let fibArray = []
    let fibNumber = [1,2,3,4,5,6,7]
    let fibNum1 = 1
    let fibNum2 = 0
    let fibNum3 = 0


    for (let i = 0; i < arrayLength; i++) {
        fibArray.push(fibNumber[i])

        fibNum3 = fibNum1 + fibNum2
        fibNum2 = 



    }
}









// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.
