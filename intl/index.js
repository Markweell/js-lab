const pi = 3.14159;

const pi_en = new Intl.NumberFormat("en").format(pi);
const pi_es = new Intl.NumberFormat("es-Es").format(pi);

console.log(pi_en); // 3.142
console.log(pi_es); // 3,142

const secondsInADay = 86400;

const secondsInADay_en = new Intl.NumberFormat("en").format(secondsInADay);
const secondsInADay_es = new Intl.NumberFormat("es-Es").format(secondsInADay);

console.log(secondsInADay_en); // 86,400
console.log(secondsInADay_es); // 86.400

const earthRadius = 6371000;

const earthRadiusScientificFormat_en = new Intl.NumberFormat("en", {
  notation: "scientific",
}).format(earthRadius);
const earthRadiusScientificFormat_es = new Intl.NumberFormat("en", {
  notation: "scientific",
}).format(earthRadius);

console.log(earthRadiusScientificFormat_en); // 6.371E6
console.log(earthRadiusScientificFormat_es); // 6.371E6

const currency = 30000;

const currency_en = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
}).format(currency);
const currency_es = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "EUR",
}).format(currency);

console.log(currency_en); // $30,000.00
console.log(currency_es); // €30,000.00

const today = new Date();

const date_en = new Intl.DateTimeFormat("en").format(today);
const date_es = new Intl.DateTimeFormat("es-ES").format(today);

console.log(date_en); // 1/16/2021
console.log(date_es); // 16/1/2021

const percentage = 0.61;

const percentage_en = new Intl.NumberFormat("en", { style: "percent" }).format(percentage);
const percentage_es = new Intl.NumberFormat("es-Es", {
  style: "percent",
}).format(percentage);

console.log(percentage_en); // 61%
console.log(percentage_es); // 61 %

const secondsInADayCompactFormat_en = new Intl.NumberFormat("en", {
  notation: "compact",
}).format(secondsInADay);
const secondsInADayCompactFormat_es = new Intl.NumberFormat("es-Es", {
  notation: "compact",
}).format(secondsInADay);

console.log(secondsInADayCompactFormat_en); // 86K
console.log(secondsInADayCompactFormat_es); // 86 mil

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".pi_en").innerHTML = `Decimales en inglés: ${pi_en}`;
  document.querySelector(".pi_es").innerHTML = `Decimales en español: ${pi_en}`;
  document.querySelector(".secondsInADay_en").innerHTML = `Números grandes en inglés: ${secondsInADay_en}`;
  document.querySelector(".secondsInADay_es").innerHTML = `Números grandes en español: ${secondsInADay_es}`;
  document.querySelector(
    ".earthRadiusScientificFormat_en"
  ).innerHTML = `Números grandes en notación científica en inglés: ${earthRadiusScientificFormat_en}`;
  document.querySelector(
    ".earthRadiusScientificFormat_es"
  ).innerHTML = `Números grandes en notación científica en español: ${earthRadiusScientificFormat_es}`;
  document.querySelector(".currency_en").innerHTML = `Importes en inglés: ${currency_en}`;
  document.querySelector(".currency_es").innerHTML = `Importes en español: ${currency_es}`;
  document.querySelector(".date_en").innerHTML = `Fechas en inglés: ${date_en}`;
  document.querySelector(".date_es").innerHTML = `Fechas en español: ${date_es}`;
  document.querySelector(".percentage_en").innerHTML = `Porcentajes en inglés: ${percentage_en}`;
  document.querySelector(".percentage_es").innerHTML = `Porcentajes en español: ${percentage_es}`;
  document.querySelector(
    ".secondsInADayCompactFormat_en"
  ).innerHTML = `Formato compacto en inglés: ${secondsInADayCompactFormat_en}`;
  document.querySelector(
    ".secondsInADayCompactFormat_es"
  ).innerHTML = `Formato compacto en español: ${secondsInADayCompactFormat_es}`;
});
