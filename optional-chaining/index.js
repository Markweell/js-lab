let obj = {
  response: {
    name: "Marcos",
  },
};

oldWayOfGetName = (object) => object && object.response && object.response.person && object.response.person.name;

getNameWithOptionalChaining = (object) => object?.response?.person?.name;

// console.log(obj.response.person.name); // Uncaught TypeError: Cannot read property 'name' of undefined at index.js:6

console.log("getNameOldVesion", oldWayOfGetName(obj)); // undefined
console.log("getNameWithOptionalChaining", getNameWithOptionalChaining(obj)); // undefined

obj = {
  response: {
    person: {
      name: "Marcos",
    },
  },
};

console.log("getNameOldVesion", oldWayOfGetName(obj)); // Marcos
console.log("getNameWithOptionalChaining", getNameWithOptionalChaining(obj)); // Marcos
