const user = {
  id: 1,
  username: "Marcos",
  surname: "Gallardo Pérez",
  moreInfo: {
    hairColor: "blond",
  },
};

const usernameWithoutDestructuring = user.username;
console.log(usernameWithoutDestructuring); // Marcos

const { id, username, surname } = user;
console.log(id, username, surname); // 1 "Marcos" "Gallardo Pérez"

// We can change the name of the keys with destructuring

const { id: identificador, username: nombre, surname: apellidos } = user;
console.log(identificador, nombre, apellidos); // 1 "Marcos" "Gallardo Pérez"

// nested destructuring

const {
  moreInfo: { hairColor },
} = user;
console.log(hairColor); // blond

// values by defect

const dog = {
  name: "rex",
  gender: "female",
};

const { name: dogName, gender, breed = "corgi" } = dog;
console.log("Dog information:", dogName, gender, breed); //Dog information: rex female corgi

const { name: dogAlias, ...rest } = dog;
console.log("dog name:", dogAlias); // dog name: rex
console.log("rest of information:", rest); // rest of information: {gender: "female"}

// Practical examples

// Change the names of keys in an object

const responseOptions = [
  {
    code: "Y",
    description: "yes",
  },
  {
    code: "N",
    description: "No",
  },
];
const selectOptions = responseOptions.map(({ description: text, code: value }) => {
  return { text, value };
});

console.log("selectOptions", selectOptions); // [ {text: 'yes', value:'Y'}, {text: 'no', value:'N'} ]
