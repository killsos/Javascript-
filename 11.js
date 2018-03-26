let a = [];
Inner:
    for (let index = 0; index < 5; index++) {
        if (index == 2) {
            continue Inner;
        } else {
            a[index] = index + 1;
        }
    }
    
console.log(a);
