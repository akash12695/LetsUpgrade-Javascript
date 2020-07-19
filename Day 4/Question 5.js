/* You are managing a sales department for your company, you want to reward your employees based on
the sales made by them during the year.
The criteria is as follows:
1. Sales from 0-5000 : 2%
2. Sales from 5001 - 10000 : 5%
3. Sales from 10001 - 20000 : 7%
4. Above 20000 - 10%
Then log the total commission earned by him. */

let Sales = parseInt(prompt("Enter Sales for the year in Rs:"));

if ((Sales != null) && (Sales >= 0)) {
    if (Sales <= 5000) {
        console.log(`Total Commission earned for the sales of ${Sales} is ${calculateCommission(2, Sales)}`);
    }
    else if (Sales <= 10000) {
        console.log(`Total Commission earned for the sales of ${Sales} is ${calculateCommission(5, Sales)}`);
    }
    else if (Sales <= 20000) {
        console.log(`Total Commission earned for the sales of ${Sales} is ${calculateCommission(7, Sales)}`);
    }
    else {
        console.log(`Total Commission earned for the sales of ${Sales} is ${calculateCommission(10, Sales)}`);
    }
}
else {
    console.log("Please enter correct sales amount")
}
function calculateCommission(percentage, Sales) {
    return (percentage * Sales * 0.01).toFixed(2)
}
