// Prolog
// Author:  Sophie Nguyen
// Email:  nnguyen177@student.gsu.edu
// Section: CodeDay Labs 311 (CL311) - Andrey Butenko

/*
    Create a program which does the following:
        - For each number from 1-100, the program prints the number (using console.log)
        - If the number is evenly divisible by 3, the program also prints "fizz"
        - If the number is evenly divisible by 5, the program also prints "buzz"
        - If it's evenly divisible by both, it prints "fizzbuzz"
        - The program should use a method to determine what to print.
*/

function fizzBuzz(): void {
    for (let i = 1; i <= 100; i++) {
      let output: string = i + " ";
  
      if (i % 3 === 0) {
        output += "fizz";
      }
  
      if (i % 5 === 0) {
        output += "buzz";
      }
  
      console.log(output || i);
    }
  }
  
  fizzBuzz();
  