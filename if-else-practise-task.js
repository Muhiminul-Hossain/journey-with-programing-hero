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
//11
let marks = 95;
if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else if (marks >= 50) {
  console.log("C");
} else {
  console.log("F");
}
//12
let bmi = 29.9;
if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal");
} else if (bmi > 24.9 && bmi <= 29.9) {
  console.log("Overweight");
} else {
  console.log("Obese");
}
//13
let month = 7;
const january = 1;
const february = 2;
const march = 3;
const april = 4;
const may = 5;
const june = 6;
const july = 7;
const august = 8;
const septembar = 9;
const octobor = 10;
const november = 11;
const december = 12;
if (month === april || month === june) {
  console.log("Summer");
} else if (month === july || month === august) {
  console.log("Borsha");
} else if (month === septembar || month === octobor) {
  console.log("Shorot");
} else if (month === november || month === december) {
  console.log("Hemonto");
} else if (month === january || month === february) {
  console.log("Sheet");
} else {
  console.log("Boshonto");
}
//14
let boyosh = 22;
let hasID = true;
let isEligableForVote =
  boyosh >= 18 && hasID ? "Eligible For Vote" : "nah tumi ekono bassa aso";
console.log(isEligableForVote);
//15
let isLoggedIn = false;
let isAdmin = true;
if(isLoggedIn){
  if(isAdmin){
    console.log("Admin Dashbord");
  }
  else{
    console.log("User Dashbord");
  }
} else {
  console.log("Pls Login");
}
//16
let evenOrOdd = 13;
let checkNumber = evenOrOdd % 2 === 0 ?"This is a even Number" : "This is an Odd Number"
console.log(checkNumber);
//17
let ages =25
let adultOrMinor = ages >=18 ? "Adult" : "Minor"
console.log(adultOrMinor);