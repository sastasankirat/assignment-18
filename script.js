// Assignment 18: Prerequisites for React.js

// =======================
// Q1 - Square each element in an array using map and arrow function
// =======================
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num * num);
// console.log("Squares:", squares);

// =======================
// Q2 - Grade calculator using ternary operators
// =======================
// function getGrade(score) {
//   return score >= 90 ? 'A' :
//          score >= 80 ? 'B' :
//          score >= 70 ? 'C' :
//          score >= 60 ? 'D' : 'F';
// }
// console.log("Grade:", getGrade(85)); // Example

// =======================
// Q3 - Car object, update year, destructure model and year
// =======================
// const car = {
//   company: "Toyota",
//   model: "Corolla",
//   year: 2020
// };
// function updateCarYear(newYear) {
//   car.year = newYear;
// }
// updateCarYear(2023);
// const { model, year } = car;
// console.log("Model:", model);
// console.log("Year:", year);

// =======================
// Q4 - Filter prime numbers from an array
// =======================
// const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// const primeNumbers = nums.filter(isPrime);
// console.log("Prime Numbers:", primeNumbers);

// =======================
// Q5 - Use cases of map, filter, and reduce
// =======================
// // map: transform values
// const nums1 = [1, 2, 3];
// const doubled = nums1.map(n => n * 2);
// console.log("Doubled:", doubled);

// // filter: get values that meet a condition
// const evens = nums1.filter(n => n % 2 === 0);
// console.log("Evens:", evens);

// // reduce: accumulate values (e.g., sum)
// const sum = nums1.reduce((acc, curr) => acc + curr, 0);
// console.log("Sum:", sum);

// =======================
// Q6 - Async function to fetch API data using async-await
// =======================
// async function fetchPosts() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log("Fetched Posts:", data);
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//   }
// }
// fetchPosts();

// =======================
// Q7 - Nested object and optional chaining
// =======================
// const person = {
//   name: "Alice Johnson",
//   address: {
//     street: "123 Main St",
//     city: "Wonderland",
//     zip: "12345"
//   }
//   // contact is intentionally missing
// };
// const phoneNumber = person.contact?.phone;
// console.log("Phone Number:", phoneNumber); // Output: undefined
