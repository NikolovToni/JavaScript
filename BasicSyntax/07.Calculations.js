function solve(numOne, numTwo) {
   let sum = numOne + numTwo;
   let difference = numOne - numTwo;
   let multiplication = numOne * numTwo;
   let avg = sum / 2;

   console.log("Sum: " + sum);
   console.log("Difference: " + Math.abs(difference));
   console.log("Product: " + multiplication);
   console.log("Average: " + avg);
}

solve(25,5);
solve(7,14);
solve(12,1);