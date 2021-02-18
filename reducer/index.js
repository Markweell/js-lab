const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const daysInAYear = daysPerMonth.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("days in a year", daysInAYear);

const text = ["Lorem", "ipsum", "dolor", "sit", "amet"];

const textReduce = text.reduce((acc, index) => acc + " " + index);
console.log(textReduce); // Lorem ipsum dolor sit amet

// Search the min number in a array
const minDaysInMonth = daysPerMonth.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue));

console.log("minimum days in a month", minDaysInMonth); //28

// Can do the map method with reduce

const arrayPrueba = [1, 2, 3, 4];
const arrayObject = [{ name: "hola" }, { name: "paco" }];

const pruebaConMap = arrayPrueba.map((value) => value + 1);

const pruebaConOwnMap = ownMap(arrayPrueba, (element) => {
  return element + 1;
});
const pruebaArrayObjectConOwnMap = ownMap(arrayObject, (element) => {
  return element.name.toUpperCase();
});

console.log("pruebaConOwnMap", pruebaConOwnMap); //
console.log("pruebaArrayObjectConOwnMap", pruebaArrayObjectConOwnMap); //
console.log("pruebaconMap", pruebaConMap); //

function ownMap(array, callback) {
  return array.reduce((accumulator, currentValue, index) => {
    return [...accumulator, callback(currentValue, index)];
  }, []);
}
