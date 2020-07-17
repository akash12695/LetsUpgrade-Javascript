let marks = +prompt("Enter the marks out of 100");


////////////********    BY USING IF ELSE STATEMENT **************//////////////
if (marks <= 100) {

    if (marks >= 75)
        console.log(`Marks are ${marks} and grade is A+`);

    else if (marks >= 60)
        console.log(`Marks are ${marks} and grade is A`);
    else if (marks >= 50)
        console.log(`Marks are ${marks} and grade is B`);
    else if (marks >= 35)
        console.log(`Marks are ${marks} and grade is C`);
    else
        console.log(`Marks are ${marks} and grade is F`)


} else {
    console.log("Invalid Marks")
}

////////**************  BY USING TERNARY ************///////////////

(marks<=100)?
(marks>=75)?console.log(`Marks are ${marks} and grade is A+`):
(marks>=60)?console.log(`Marks are ${marks} and grade is A`):
(marks>=50)?console.log(`Marks are ${marks} and grade is B`):
(marks>=35)?console.log(`Marks are ${marks} and grade is C`):
console.log(`Marks are ${marks} and grade is F`):
console.log("Invalid Marks");

