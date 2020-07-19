//Prime number between 2 to n

let n = 50;
let num = 2;
while (num <= n) {
    let count = 0;
    for (let div = 2; div < num; div++) {
        if (num % div == 0) {
            count++;
            break;
        }
    }
    if (count == 0) {
        console.log(num);
    }
    num++;
}