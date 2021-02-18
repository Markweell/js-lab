const response = {
  name: "Rex",
};

// console.log(response.dog.name); // Uncaught TypeError: Cannot read property 'name' of undefined

// response doesn't have the key: dog
console.log("old way of get name: ", response && response.dog && response.dog.name); // undefined
console.log("get name with optional chaining: ", response?.dog?.name); // undefined

console.log("test or: ", response?.dog?.name || "obj does not exist"); // obj does not exist
console.log("test nullish-coalescing: ", response?.dog?.name ?? "obj does not exist"); // obj does not exist

const responseWithSurname = {
  dog: {
    name: "Rex",
    surname: "",
  },
};

console.log("test or: ", responseWithSurname?.dog?.surname || "the name does not exist"); // the name does not exist
console.log("test nullish-coalescing: ", responseWithSurname?.dog?.surname ?? "the name does not exist"); //

console.log("" || "empty response"); // empty response
console.log("" ?? "empty response"); //

console.log(0 || "empty response"); // empty response
console.log(0 ?? "empty response"); // 0
