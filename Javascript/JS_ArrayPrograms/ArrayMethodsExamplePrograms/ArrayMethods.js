// ===============================
// Object Methods Demonstration
// ===============================

// 1. Object.assign()
console.log("=== Object.assign ===");
const user = { name: "Alice" };
const details = { age: 25, city: "Bengaluru" };
const merged = Object.assign({}, user, details);
console.log(merged); // { name: "Alice", age: 25, city: "Bengaluru" }

// 2. Object.keys()
console.log("\n=== Object.keys ===");
const book = { title: "JS Basics", author: "John", pages: 200 };
Object.keys(book).forEach(key => console.log(key)); // title, author, pages

// 3. Object.values()
console.log("\n=== Object.values ===");
console.log(Object.values(book)); // ["JS Basics", "John", 200]

// 4. Object.entries()
console.log("\n=== Object.entries ===");
const student = { name: "Rahul", grade: "A" };
for (const [key, value] of Object.entries(student)) {
  console.log(`${key}: ${value}`);
}

// 5. Object.create()
console.log("\n=== Object.create ===");
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats);  // true (inherited)
console.log(dog.barks); // true

// 6. Object.freeze()
console.log("\n=== Object.freeze ===");
const car = { brand: "Toyota", model: "Corolla" };
Object.freeze(car);
car.brand = "Honda"; // ignored
console.log(car.brand); // "Toyota"

// 7. hasOwnProperty()
console.log("\n=== hasOwnProperty ===");
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("toString")); // false (inherited)

// 8. toString()
console.log("\n=== toString ===");
const num = 123;
console.log(num.toString()); // "123"
const obj = { a: 1 };
console.log(obj.toString()); // "[object Object]"

// 9. valueOf()
console.log("\n=== valueOf ===");
const numObj = new Number(50);
console.log(numObj.valueOf()); // 50
const strObj = new String("Hello");
console.log(strObj.valueOf()); // "Hello"

// ===============================
// Combined Example
// ===============================
console.log("\n=== Combined Example ===");
const defaults = { theme: "light", notifications: true };
const overrides = { theme: "dark" };
const settings = Object.assign({}, defaults, overrides);
Object.freeze(settings);

for (const [key, value] of Object.entries(settings)) {
  console.log(`${key} = ${value}`);
}
console.log(Object.values(settings)); // ["dark", true]
