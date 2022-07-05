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
    let length = arrayLength
  let num1 = 0
  let num2 = 1
  let nextnum;
  let newArray = []
  
  for (let i = 0; i <= length; i++ ) {
    if (num1 !== 0) {
        newArray.push(num1)
    }
    nextnum = num1 + num2
    num1 = num2
    num2 = nextnum
  }
  
    return newArray
  }
  
  
  // console.log(returnSpecificArray([1,2,3,4,5,6]))

   // i did end up having to google what the fibbonaci sequence was and how to represent it with variables during the loop




// a) Create a test with expect statements for each of the variables provided.

// i need to create a test with describe of a function called returnSpecificArray; the test will describe that it takes in a number and returns an array that length with the numbers of the fibonacci sequence, it will describe two tests for two different inputs 6 and 10


describe ("returnSpecificArray", () => {
    it("takes in a integer and returns a array that length with the numbers of the fibonnaci sequence", () => {
        expect(returnSpecificArray(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(returnSpecificArray(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
} )

// at this point i realized i was inputing an array and taking its length property to make the new arrays length so i changed it to just be a simple number; i also had to add a if statement to stop the 0 from being returned

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

    // I need to declare an an function called sortOddNumbers
    //  that will take in one array input called inputArray
    //  and return an array with only odd numbers in order from least to greatest 
    // to do that i will create an array and map through the array putting only the odd numbers into a new array call oddNumbers
    // i will need to take that array of oddNumbers and then sort them from least to greatest and put it in a new array called sortedOddNumbers

// const sortOddNumbers = (inputArray) => {
//     let oddNumbers = []
//     oddNumbers = inputArray.map(value => value % 2 === 0)

// }

// i was mistaked i need to use filter to first return a smaller array with only the values i want rather than map that returns an array of the same length


const sortOddNumbers = (inputArray) => {
    let oddNumbers = []
    oddNumbers = inputArray.filter(value => {
      if(value % 2 === 1) {
        return value
      } else if (value % 2 === -1) {
        return value
      }
    })
    oddNumbers = oddNumbers.filter(value => typeof value === 'number')
    oddNumbers.sort((a, b) => a - b)
    // i had to google this sorting method and the input it needed to sort correctly, from the understanding i gained is that the method compares the array it is called upon to the input array
    return oddNumbers
    
  }  
  
  // console.log(sortOddNumbers(fullArr1))


// now im writing the test, i had to copy the syntax from a previous test from another challenge and fill in the correct values


describe("sortOddNumbers", () => {
    it("takes in an array, filters the odd numbers into a new array then sorts them least to greatest", () => {
      expect(sortOddNumbers(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(sortOddNumbers(fullArr2)).toEqual([-823, 7, 23])
    })
  })
   // i ran the test the first time and saw that the function was not returning -9 so i have to go back and change it to accept that as well 
   // after i added the extra conditional about -1 it is passing
  
 


// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// i will declare an array called accumulatingSum it will take in one array and then add all the values and return that value in a new array called accumulatedSumArray

describe("accumulatingSum", () => {
    it("takes in an array of numbers and adds each one to the previous one and returns a new array with those values", () => {
        expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumulatingSum(numbersToAdd3)).toEqual([])
    })
})



// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.
// i accidently made the function first then moved it down here



const accumulatingSum = (arrayInput) => {
    let accumulatedSum = 0
    accumulatedSumArray = []
    for (i = 0; i < arrayInput.length; i ++) {
      accumulatedSum = accumulatedSum + arrayInput[i]
      accumulatedSumArray.push(accumulatedSum)
    }
  
    
    return accumulatedSumArray
    
  }
  


