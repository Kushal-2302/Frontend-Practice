// Comparison Examples in JavaScript
// Covers == vs ===, type coercion, string comparison, null/undefined, NaN, and edge cases

console.log("=== Basic Comparisons ===");

console.log(5 > 3);         // true
console.log(2 == "2");      // true → loose equality with type coercion
console.log(2 === "2");     // false → strict equality, no coercion
console.log("apple" > "banana"); // false → string comparison by Unicode

console.log("\n=== Type Coercion ===");

console.log("2" > 1);       // true → "2" becomes 2
console.log("01" == 1);     // true → "01" becomes 1
console.log(true == 1);     // true → true becomes 1
console.log(false == 0);    // true → false becomes 0
console.log(null == undefined); // true → special case
console.log(null === undefined); // false → strict comparison

console.log("\n=== Tricky Comparisons with null ===");

console.log(null > 0);      // false → null becomes 0, but comparison fails
console.log(null == 0);     // false → no coercion here
console.log(null >= 0);     // true → null becomes 0

console.log("\n=== NaN Behavior ===");

console.log(NaN == NaN);    // false → NaN is never equal to anything
console.log(NaN === NaN);   // false
console.log(Number.isNaN(NaN)); // true → use this to check for NaN

console.log("\n=== Complex Type Coercion ===");

console.log([] == false);   // true → [] becomes "", then 0
console.log([] == "");      // true → both become ""
console.log([1] == 1);      // true → [1] becomes "1", then 1
console.log([1,2] == "1,2"); // true → both become "1,2"
console.log({} == "[object Object]"); // false → object vs string

console.log("\n=== Strict Equality Best Practice ===");

let a = "5";
let b = 5;

if (a === b) {
  console.log("Strictly equal");
} else {
  console.log("Not strictly equal"); // safer and predictable
}

console.log("\n=== Comparing Objects and Arrays ===");

let arr1 = [1, 2];
let arr2 = [1, 2];

console.log(arr1 == arr2);  // false → different references
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true → compare values

let obj1 = { name: "Kushal" };
let obj2 = { name: "Kushal" };

console.log(obj1 == obj2);  // false → different references
console.log(obj1.name === obj2.name); // true → compare properties

console.log("\n=== Custom Comparison Function ===");

function isEqual(a, b) {
  if (typeof a === "object" && typeof b === "object") {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return a === b;
}

console.log(isEqual([1, 2], [1, 2])); // true
console.log(isEqual({ x: 1 }, { x: 1 })); // true
console.log(isEqual(5, "5")); // false

console.log("\n=== Edge Case: Boolean Conversion ===");

console.log(Boolean(0));        // false
console.log(Boolean("0"));      // true
console.log(Boolean(""));       // false
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true

console.log("\n=== Safe Comparison Wrapper ===");

function safeCompare(a, b) {
  if (a == null || b == null) {
    return "One value is null or undefined";
  }
  return a === b ? "Strictly equal" : "Not equal";
}

console.log(safeCompare(null, 0));      // One value is null or undefined
console.log(safeCompare("5", 5));       // Not equal
console.log(safeCompare("hello", "hello")); // Strictly equal
