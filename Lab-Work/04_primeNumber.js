outerloop: for (let i = 1; i <= 100; i++) {
    for (let j = 2; j <= i/ 2; j++) {
        if (i %j== 0) {
            continue outerloop;
        }
    }
    console.log(i);
}