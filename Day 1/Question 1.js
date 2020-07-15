//Console functions

console.log("Hello Letsupgraders lets learn JavaScript"); //prints the output in the console

console.error("Fatal Error Occured"); // Used to log error message to the console(highlighted in red color)

console.warn("System Warning"); // Used to log warning message to the console(highlighted in red color)

//console.clear(); //clears the entire console output

//table function:
console.time();
var a = { brand: "Apple", Model: "i11", color: "White" }
var b = { brand: "Oppo", Model: "A83", color: "Black" }
var c = { brand: "Redmi", Model: "Note7", color: "Blue" }

console.table({ a, b, c }); // prints the object/array in a table format
console.timeEnd();  //outputs the time taken to run the code in ms, need to specify the start by writing "console.time()"

for (let i = 0; i < 5; i++) {
    console.count(i);
    console.count(i); //outputs the number of times the count method is called. 
}

//group and groupEnd functions are used to group specfic contents in a block in the console
console.group("test");
console.log(true);
console.warn("Checking use of group functions");
console.groupEnd("test");