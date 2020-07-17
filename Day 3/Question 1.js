let num = prompt("Enter the number")
console.log(num)

function findOddEven(num) {
    if (num % 2 == 0) {
        console.log(`The number entered is ${num} and Number is even`)
    }
    else {
        console.log(`The number entered is ${num} and Number is odd`)
    }
}
findOddEven(num)