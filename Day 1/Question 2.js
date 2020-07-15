/* 
a. Var :- 
    1. The scope of varibale defined within the keyword "var" is limited to the "function" within
       which it is defined.
    2. If it is defined outside any function the scope of the varibale is global
    3. var is "functioned scoped"

b. let:- 
    1. The scope of a variable defined with the keyword “let” or “const” is limited to the “block” 
       defined by curly braces i.e. {} .
    2. “let” and “const” are“block scoped”.

c. const:- 
    1. The scope of a variable defined with the keyword “const” is limited to the block 
       defined by curly braces.
    2. However if a variable is defined with keyword const, it cannot be reassigned.
    3. “const” cannot be re-assigned to a new value. However it CAN be mutated.*/


var a = 10.5
console.log(a);
a = a - 4.3;
console.log(a);
var a = "test_string"
console.log(a);
var b;

//block of code (local)
console.group("Checking let keyword")
{
    let a = "local"
    console.log("local value of a : " + a);

    a = a + "train";
    console.log(a);
    // let a = true;      //Cannot be declared again
    let b;

}
console.groupEnd("Checking let keyword")
console.log(a);  //global variable value 

//block of code (local)
console.group("Checking const keyword")
{
    const a = 10;
    console.log("local value of a : " + a);

    // a = 14;           // updating and redeclaring not allowed for const
    //const a = true;      //Cannot be declared again
    //const b;             //must be initialized at the time of declaration 

}
console.groupEnd("Checking const keyword")
console.log(a);  //global variable value 