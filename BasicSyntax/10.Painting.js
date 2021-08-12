function solve(yellow) {
    let red = yellow / 4;
    let white = yellow * 2;
    let total = red + yellow + white;

    console.log("Red: " + red);
    console.log("Yellow: " + yellow);
    console.log("White: " + white);
    console.log("Total: " + total);    
}

solve(10);
solve(17);
solve(42);