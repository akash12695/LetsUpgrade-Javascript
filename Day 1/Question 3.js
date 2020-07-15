/*
Data Types in JavaScript:-

1. Data types basically specify what kind of data can be stored and manipulated within a program.
2. There are six basic data types in JavaScript which can be divided into three main categories:
    a. primitive (or primary)
    b. composite (or reference),
    c. special data types.
3. String, Number, and Boolean are primitive data types.
4. Object, Array, and Function (which are all types of objects) are composite data types.
5. Whereas Undefined and Null are special data types.
6. Primitive data types can hold only one value at a time,
7. Composite data types can hold collections of values and more complex entities.-->

<!--Example of all the Data Types in JavaScript -->*/

//1. STRING
var a = 'Hi there!';
console.log(typeof (a))
console.log(a)


//2. NUMBER
var a = 2;
console.log(typeof (a))
console.log(a)


//3. BOOLEAN
var isTyping = true
console.log(typeof (isTyping))
console.log(isTyping)


//4. OBJECT
var person = { "name": "Akash", "surname": "Mishra", "age": "24" };
console.log(typeof (person))
console.log(person)


//5. ARRAY
var colors = ["Red", "Yellow", "Green", "Orange"];
console.log(typeof (colors))
console.log(colors)


//6. FUNCTION
var greeting = function () {
    return "Hello World!";
}
console.log(typeof (greeting))
console.log(greeting)


//7. UNDEFINED 
var z;
console.log(typeof (z))
console.log(z)


//8. NULL
var m = null
console.log(typeof (m))
console.log(m)