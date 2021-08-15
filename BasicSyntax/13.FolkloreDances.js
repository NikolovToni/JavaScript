function solve(lenght, width, side) {
    let bench = Math.pow(side, 2) * 100;
    let area  = (lenght * 100) * (width * 100);
    let wardrobe = area / 10; 

    let freeArea =  area - bench - wardrobe;

    let dancers = freeArea / (40 + 70000);

    console.log(dancers);
}

solve(50, 25, 2);
