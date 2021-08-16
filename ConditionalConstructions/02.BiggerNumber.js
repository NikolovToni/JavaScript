function solve(firstNum, secondNum) {
    if (firstNum > secondNum) {
        console.log(firstNum);
    } else if (secondNum > firstNum) {
        console.log(secondNum);
    } else {
        console.log("The numbers are equal!");
    }
}

solve(2, 4);
solve(7, 12);
solve(-1, -5);