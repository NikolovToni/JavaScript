function solve(minutes) {
    let hour = 0;
    

    for(let i = 0; i < minutes; i++) {
        if(minutes - 60 >= 0) {
            hour++;
            minutes -= 60;
        }
    }
    console.log(hour + ":" + minutes);
}

solve(60);
solve(90);
solve(325);