////////////////**********   Strings     *************///////////////////

// 1. charCodeAt() :- Return the Unicode of the first character in a string (the Unicode value for "H"):
var str = "HELLO WORLD";
var n = str.charCodeAt(0);
console.log(n)


//2. concat() :-The concat() method is used to join two or more strings.
var str1 = "Hello ";
var str2 = "world!";
var join = str1.concat(str2);
console.log(join)

/*3.includes() :- This method determines whether a string contains the characters of a specified string. 
This method returns true if the string contains the characters, and false if not.*/
var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
console.log(n)

//4.match() :-This method searches a string for a match against a regular expression, and returns the matches, as an Array object
var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);
console.log(res)

//5.repeat():-This method returns a new string with a specified number of copies of the string it was called on.
var str = "Hello world!";
var m=str.repeat(2);
console.log(m)

//6.replace():-This method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
var str = "Hello Microsoft!";
var res = str.replace("Microsoft", "Akash");
console.log(res)

//7.search():- This method searches a string for a specified value, and returns the position of the match.
var str = "Visit Office today!";
var n = str.search("Office");
console.log(n)

//8.slice():- This method extracts parts of a string and returns the extracted parts in a new string.
var str = "Hello world!";
var s = str.slice(0, 5);
console.log(s)


//9.substr():-This method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
var str = "Hello world!";
var m = str.substr(1, 4);
console.log(m)

//10.trim():- This method removes whitespace from both sides of a string.
var str = "       Hello World!        ";
var m=str.trim();
console.log(m)

///////////////////////************      ARRAY    *********/////////////////////////////


//1. concat():- method is used to join two or more arrays.
var fruits = ["Mango", "apple"];
var vegetable = ["onion", "tomatoe", "garlic"];
var mix = fruits.concat(vegetable);
console.log(mix)

//2. fill():- method fills the specified elements in an array with a static value.
var fruits = ["Mango", "apple"];
var m= fruits.fill("banana")
console.log(m)

//3.Array.from():- method returns an Array object from any object with a length property or an iterable object.
var myArr = Array.from("ABCDEFG");
console.log(myArr)

//4.join():- method returns the array as a string.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var join = fruits.join();
console.log(join)

//5.push():- method adds new items to the end of an array, and returns the new length
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var k=fruits.push("Kiwi");
console.log(k)

/* 6. sort():-  method sorts the items of an array.
The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
By default, the sort() method sorts the values as strings in alphabetical and ascending order.*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var m=fruits.sort();
console.log(m)

//7. toString():- method returns a string with all the array values, separated by commas.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var m=fruits.toString();
console.log(m)

//8. unshift():- method adds new items to the beginning of an array, and returns the new length.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var j=fruits.unshift("Lemon","Pineapple");
console.log(j)

//9.valueOf():- method returns the array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var v = fruits.valueOf();
console.log(v)

//10. reverse():- method reverses the order of the elements in an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var r=fruits.reverse();
console.log(r)