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
