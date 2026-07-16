//1
let price1 = 45;
let price2 = "45";
console.log(price1 == price2);
console.log(price1 === price2);
console.log(price1 != price2);
console.log(price1 !== price2);
console.log(price1 > price2);
console.log(price1 < price2);
console.log(price1 >= price2);
console.log(price1 <= price2);

//2
// ? "5 " == 5 is true but "5" ===5 is false

//3
let isRaining = false;
let raining = isRaining ? "Take an Umbrella" : "Take the sunglass";
console.log(raining);
//4
let stock = 56465;
if (stock === 0) {
  console.log("Out of stock");
}
//5
let number = 0;
if (number < 0) {
  console.log("The number is a negative number");
} else if (number > 0) {
  console.log("The Number is a positive number");
} else {
  console.log("Ghorar Anda");
}
//6
let year = 2042;
if (year % 4 === 0) {
  console.log("This is a leap year");
} else {
  console.log("This is not a leap year");
}
//7
const speed = 39;
if (speed > 80) {
  console.log("Overspeeding");
} else {
  console.log("Normal speed");
}
// 8
let age = 15;
let hasTicket = true;
if (age > 18 && hasTicket) {
  console.log("Entry allowed");
}
//9
let isWeeekend = true;
let isHoliday = false;
if (isWeeekend || isHoliday) {
  console.log("No work today");
}
//10
let correctUserName = "Mahdi";
let correctPassword = 123456;
let userInputName = "mahdi";
let userInputPassword = 123456;
if (
  correctUserName.toLowerCase() === userInputName.toLowerCase() &&
  correctPassword === userInputPassword
) {
  console.log("Login Succesful");
} else {
  console.log("Invalid User Info");
}
