function solve(minutes) {
    let hour = 0;
    

    for(let i = 0; i < minutes; i++) {
        if(minutes - 60 >= 0) {
            hour++;
            minutes -= 60;
        }
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    console.log(hour + ":" + minutes);
}

solve(60);
solve(90);
solve(325);
solve(69);