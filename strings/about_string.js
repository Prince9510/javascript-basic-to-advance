/** 
 * JavaScript String and Its Methods
 * 
 * A string in JavaScript is a sequence of characters used to represent text. 
 * Strings are immutable, meaning once created, they cannot be changed. 
 * Any operation on a string creates a new string.
 * 
 * Below are some common ways to create strings and methods to manipulate them.
 */

// Creating Strings
let str1 = 'Hello';
let str2 = "World";
let str3 = `Template literal`;

// Common String Methods:

// 1. toLowerCase() – Converts all characters in the string to lowercase.
console.log("HELLO".toLowerCase());  // Output: 'hello'

// 2. toUpperCase() – Converts all characters in the string to uppercase.
console.log("hello".toUpperCase());  // Output: 'HELLO'

// 3. trim() – Removes whitespace from both ends of the string.
console.log("  hello  ".trim());  // Output: 'hello'

// 4. replace(oldValue, newValue) – Replaces the first match of a string or regex with another string.
console.log("hello world".replace("world", "JavaScript"));  // Output: 'hello JavaScript'

// 5. split(separator) – Splits the string into an array based on a separator.
console.log("a,b,c".split(","));  // Output: ['a', 'b', 'c']

// 6. concat(string2) – Joins two or more strings.
console.log("Hello".concat(" ", "World"));  // Output: 'Hello World'

// 7. indexOf(substring) – Returns the index of the first occurrence of the specified value.
console.log("hello".indexOf("e"));  // Output: 1

// 8. includes(substring) – Determines whether one string may be found within another.
console.log("hello".includes("ell"));  // Output: true

// 9. startsWith(prefix) / endsWith(suffix) – Checks if the string starts/ends with the given substring.
console.log("hello".startsWith("he"));  // Output: true
console.log("hello".endsWith("lo"));    // Output: true

// 10. charAt(index) / charCodeAt(index) – Returns the character or Unicode of the character at a specific index.
console.log("hello".charAt(1));       // Output: 'e'
console.log("hello".charCodeAt(1));   // Output: 101

