//Make a Calculator in Javascript which can do operations as Addtion, Subtraction, Multiplication, Division,Square root, Percentage.


let calc = function (num1, num2, Operation) {
    var result;
    let chart = {
        "Addition": "Add",
        "Subtraction": "Sub",
        "Multiplication": "Mul",
        "Division": "Div",
        "SquareRoot": "Sqrt",
        "Percentage": "Percent"
    }


    if (Operation == "Add") {
        result = +num1 + +num2;
        return `${num1}+${num2}=${result}`
    }
    else if (Operation == "Sub") {
        result = +num1 - +num2;
        return `${num1}-${num2}=${result}`
    } else if (Operation == "Mul") {
        result = +num1 * +num2;
        return `${num1}*${num2}=${result}`
    } else if (Operation == "Div") {
        result = +num1 / +num2;
        return `${num1}/${num2}=${result}`
    } else if (Operation == "Sqrt") {
        result = Math.sqrt(+num1);
        return `Square Root of ${num1}=${result}`
    } else if (Operation == "Percent") {
        result = (+num1 /+num2)*100;
        return `${num1} is ${result} % of ${num2}`
    }
    else{
        console.log("Please enter correct Operation")
        console.log(chart)
        return;
    }
}

c=calc(2,3,"Add")
console.log(c)
