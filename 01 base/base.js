//вивід текстового повідомлення в консоль
comsole.log ("Message from another js file");
console.warn("Some warning message");
console.error("Some error message");
let email = "kossofia@gmail.com";
console.log("My email:"+ email);
//виводить в консоль  прізвище
let surname ="Your surname";
console.log("Your surname is"+ surname);

let your_email;
let howoldareyou;

your_email = "somebody.6@gmail.com";
howoldareyou = 28;

console.log("Your email:", your_email);
console.log("I am :", howoldareyou);

your_email=howoldareyou;
cconsole.log("Значення Your email після копіювання:", your_email);
console.log("Значення I am після копіювання:", howoldareyou);

let змінні = {
    String: "Hello",
    Number: 15,
    Boolean: true,
    Undefined: undefined,
    Null: null
};
console.log(змінні);

let isAdult = confirm("Ви досягли повнолітнього віку?");

console.log(isAdult);
// Оголошення та ініціалізація змінних
let firstName= "Jonny";
let lastName= "Brandon";
let groupNape= "B76";
let birthYear= 1987;
let isMarried = false;
// Виведення значень змінних в консоль
console.log(typeof birthYear, birthYear);
console.log(typeof isMarried, isMarried);
console.log(typeof firstName, firstName);
console.log(typeof lastName, lastName);
// Створення змінних типу Null та Undefined
let nullVariable= null;
let undefinedVariable;
// Виведення типів змінних в консоль
console.log(typeof nullVariable);
console.log(typeof undefinedVariable);

//second lesson

let a= 2;
let b=8;
let c=6;
if (a < b && b < c) {
console.log("Висловлювання є істинним.");
} else {
console.log("Висловлювання є хибним.");
}

let x = 1;
let y = 2;

let res1 = x + y ;// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = true + 2 ; // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""


let isAdult = +prompt("Ви досягли повнолітнього віку? Введіть 'так' або 'ні'.");

if (isAdult === "так") {
  console.log("Ви досягли повнолітнього віку.");
} else {
  console.warn("Ви ще надто молоді.");
}


const currentHour= +prompt("Enter time:");
if (currentHour >= 23 || currentHour < 5) {
  console.log("Доброї ночі");
} else if (currentHour < 11) {
  console.log("Доброго ранку");
} else if (currentHour < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}


if (currentHour >= 23 || currentHour < 5) {
  console.log("Доброї ночі");
}
if (currentHour >= 5 && currentHour < 11) {
  console.log("Доброго ранку");
}
if (currentHour >= 11 && currentHour < 17) {
  console.log("Доброго дня");
}
if (currentHour >= 17 && currentHour < 23) {
  console.log("Доброго вечора");
}


