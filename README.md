# 🚀 JavaScript Practice Tasks

JavaScript-এর basic concepts শেখার পর নিচের ১০টি task complete করো।

> **Rule:** আগে নিজে logic চিন্তা করবে, তারপর code লিখবে। সরাসরি solution copy করবে না।

---

## 🟢 Task 1 — Student Grade Calculator

একটি function তৈরি করো:

```js
function calculateGrade(marks) {
  // code
}
```

### Requirements

Marks অনুযায়ী grade return করবে:

| Marks    | Grade |
| -------- | ----- |
| 80–100   | A+    |
| 70–79    | A     |
| 60–69    | A-    |
| 50–59    | B     |
| 40–49    | C     |
| Below 40 | F     |

### Example

```js
console.log(calculateGrade(85));
// A+

console.log(calculateGrade(72));
// A

console.log(calculateGrade(35));
// F
```

### Bonus

Invalid marks যেমন `-10` বা `120` দিলে:

```text
Invalid marks
```

return করো।

---

# 🟢 Task 2 — Array Statistics

নিচের array ব্যবহার করো:

```js
const numbers = [12, 45, 7, 89, 23, 56, 34];
```

একটি program তৈরি করো যা বের করবে:

* Total
* Average
* Maximum
* Minimum
* Even numbers
* Odd numbers

### Expected Result

```text
Total: ...
Average: ...
Maximum: ...
Minimum: ...
Even Numbers: [...]
Odd Numbers: [...]
```

### Must Practice

* Loop
* Array
* Function
* Conditional statement

### Bonus

Built-in `Math.max()` / `Math.min()` ব্যবহার না করে নিজে maximum ও minimum বের করো।

---

# 🟢 Task 3 — Student Search System

নিচের data ব্যবহার করো:

```js
const students = [
  { name: "Rahim", age: 22, course: "JavaScript" },
  { name: "Karim", age: 21, course: "React" },
  { name: "Hasan", age: 23, course: "Node.js" },
  { name: "Nayeem", age: 20, course: "JavaScript" }
];
```

একটি function তৈরি করো:

```js
function searchStudent(name) {
  // code
}
```

### Example

```js
searchStudent("Rahim");
```

Rahim-এর complete information return করবে।

### Requirements

Search case-insensitive হতে হবে।

```js
searchStudent("rahim");
```

এটিও Rahim-কে খুঁজে পাবে।

### Bonus

কোনো student না পাওয়া গেলে:

```text
Student not found
```

return করো।

---

# 🟡 Task 4 — Shopping Cart Calculation

নিচের product data ব্যবহার করো:

```js
const cart = [
  { name: "Keyboard", price: 1200, quantity: 2 },
  { name: "Mouse", price: 800, quantity: 1 },
  { name: "Headphone", price: 1500, quantity: 2 }
];
```

একটি function তৈরি করো:

```js
function calculateTotal(cart) {
  // code
}
```

প্রতিটি product-এর:

```text
price × quantity
```

calculate করে total বের করো।

### Example

```js
console.log(calculateTotal(cart));
```

### Bonus

যদি total:

* 5000+ → 10% discount
* 3000+ → 5% discount
* এর নিচে → কোনো discount নেই

তাহলে final payable amount বের করো।

---

# 🟡 Task 5 — Todo Manager

একটি simple Todo Manager তৈরি করো।

### Data

```js
const todos = [];
```

নিচের functions তৈরি করতে হবে:

```js
addTodo(title);
removeTodo(id);
completeTodo(id);
getTodos();
```

### Example

```js
addTodo("Learn JavaScript");
addTodo("Practice Array");
addTodo("Learn React");

completeTodo(2);

removeTodo(3);

console.log(getTodos());
```

### প্রতিটি Todo-তে থাকবে:

```js
{
  id: 1,
  title: "Learn JavaScript",
  completed: false
}
```

### Must Practice

* Array
* Object
* Function
* `push()`
* `find()`
* `filter()`
* `map()`

---

# 🟡 Task 6 — Password Validator

একটি function তৈরি করো:

```js
function validatePassword(password) {
  // code
}
```

Password valid হওয়ার জন্য:

* Minimum 8 characters
* অন্তত 1টি uppercase letter
* অন্তত 1টি lowercase letter
* অন্তত 1টি number

### Example

```js
validatePassword("Hello123");
```

Result:

```text
Valid Password
```

আর:

```js
validatePassword("hello");
```

Result:

```text
Invalid Password
```

### Bonus

কোন requirement missing তা বলে দাও:

```text
Password must contain an uppercase letter.
Password must contain a number.
```

---

# 🟠 Task 7 — Expense Tracker

একটি ছোট Expense Tracker তৈরি করো।

### Data

```js
const expenses = [
  { title: "Food", amount: 500, category: "Food" },
  { title: "Bus", amount: 100, category: "Transport" },
  { title: "Internet", amount: 1000, category: "Bill" },
  { title: "Lunch", amount: 300, category: "Food" }
];
```

### Functions

```js
getTotalExpense();

getExpenseByCategory(category);

getHighestExpense();

getAverageExpense();
```

### Example

```js
getExpenseByCategory("Food");
```

Food category-এর সব expense return করবে।

### Bonus

প্রতিটি category-এর total বের করো:

```text
Food: 800
Transport: 100
Bill: 1000
```

---

# 🟠 Task 8 — User Data Processor

নিচের data ব্যবহার করো:

```js
const users = [
  {
    name: "Rahim",
    age: 22,
    active: true
  },
  {
    name: "Karim",
    age: 17,
    active: false
  },
  {
    name: "Hasan",
    age: 25,
    active: true
  },
  {
    name: "Nayeem",
    age: 19,
    active: true
  }
];
```

### Functions তৈরি করো

```js
getActiveUsers();

getAdultUsers();

getUserNames();

getUserByName(name);
```

### Expected Concepts

এই task-এ practice করবে:

* `filter()`
* `map()`
* `find()`
* Arrow Function
* Object
* Array

### Bonus

শুধু active এবং adult users বের করো।

---

# 🟠 Task 9 — Simple Authentication System

একটি basic authentication system তৈরি করো।

### Users

```js
const users = [
  {
    username: "rahim",
    password: "1234"
  },
  {
    username: "karim",
    password: "abcd"
  }
];
```

একটি function তৈরি করো:

```js
function login(username, password) {
  // code
}
```

### Example

```js
login("rahim", "1234");
```

Output:

```text
Login successful
```

ভুল password:

```js
login("rahim", "9999");
```

Output:

```text
Invalid username or password
```

### Bonus

Login successful হলে একটি object return করো:

```js
{
  success: true,
  message: "Login successful",
  username: "rahim"
}
```

---

# 🔥 Task 10 — Mini Student Management System

শেষ task হিসেবে আগের সব concepts combine করে একটি **Student Management System** তৈরি করো।

### Student Data

```js
const students = [];
```

প্রতিটি student:

```js
{
  id: 1,
  name: "Rahim",
  age: 22,
  course: "JavaScript",
  marks: 85
}
```

### Functions তৈরি করতে হবে

```js
addStudent(student);

removeStudent(id);

findStudent(id);

searchStudent(name);

getStudentsByCourse(course);

getPassedStudents();

getAverageMarks();

getTopStudent();
```

### Example

```js
addStudent({
  id: 1,
  name: "Rahim",
  age: 22,
  course: "JavaScript",
  marks: 85
});

addStudent({
  id: 2,
  name: "Karim",
  age: 21,
  course: "React",
  marks: 72
});

addStudent({
  id: 3,
  name: "Hasan",
  age: 23,
  course: "JavaScript",
  marks: 91
});
```

### Expected Operations

```js
console.log(searchStudent("Rahim"));

console.log(getStudentsByCourse("JavaScript"));

console.log(getPassedStudents());

console.log(getAverageMarks());

console.log(getTopStudent());
```

### Bonus

Student-এর grade automatically calculate করো:

```text
80+  → A+
70+  → A
60+  → A-
50+  → B
40+  → C
<40  → F
```

---

# 🎯 What You Should Practice

এই ১০টি task করার সময় চেষ্টা করবে নিচের concepts ব্যবহার করতে:

* Variables
* Data Types
* Operators
* Conditions
* Loops
* Functions
* Parameters & Return
* Arrays
* Objects
* Array Methods
* Template Literals
* Arrow Functions
* Scope
* Basic Error Handling

---

# 🏆 Final Goal

এই ১০টি task শেষ করার পর তুমি যেন:

1. Problem দেখে নিজে logic তৈরি করতে পারো।
2. Function দিয়ে code organize করতে পারো।
3. Array ও Object-এর data নিয়ে কাজ করতে পারো।
4. `map()`, `filter()`, `find()` ইত্যাদি confidently ব্যবহার করতে পারো।
5. Multiple concepts একসাথে ব্যবহার করে ছোট application logic তৈরি করতে পারো।

> **Important:** Task 10 পর্যন্ত যাওয়ার আগে প্রতিটি task নিজে করার চেষ্টা করো। কোনো task-এর solution না দেখে অন্তত 20–30 মিনিট problem solve করার চেষ্টা করো।
