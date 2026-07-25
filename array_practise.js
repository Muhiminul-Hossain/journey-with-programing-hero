//1
let number = [
  5, 6, 7, 9, 12, 34, 56, 35, 16, 48, 34, 46, 56, 35, 16, 48, 34, 46,
];
console.log(number);
//2
console.log(number.length);
//3
console.log(number[0]);
console.log(number[2]);
//4
const changeTheValue1 = (number[1] = 43);
console.log(number);
//5
number.push(78);
console.log(number);
//6
number.pop;
console.log(number);
//7
number.unshift(98);
console.log(number);
//8
number.shift();
console.log(number);
//9
const checkNumber = number.includes(56);
console.log(checkNumber);
//10
console.log(number.indexOf(35));
//11
for (let num of number) {
  console.log(num);
}
//12
let numberLength = number.length;
let j = 0;
while (j < numberLength) {
  const itemsNumber = number[j];
  console.log(itemsNumber);
  j++;
}

//13
const players = ["rohim", "korim", "jobbar", "solim"];
const numbers = [12, 34, 56, 35, 16, 48, 34, 46];
let concatNumbersAndPlayers = players.concat(numbers);
console.log(concatNumbersAndPlayers);
//14
const numbersPortion = numbers.slice(1, 5);
console.log(numbersPortion);
//15
const singleLineString = ["I", "love", "coding"];
console.log(singleLineString.join(" "));
//16
const x = "not a array";
console.log(number, Array.isArray(number));

console.log(x, Array.isArray(x));
//17
console.log(number.reverse());
//18
console.log(players.sort());
console.log(number.sort((a, b) => a - b));
//19
for (let i = 0; i < numberLength; i++) {
  let numberValues = number[i];
  if (numberValues > 10) {
    console.log(numberValues);
  }
}
//20
let sum = 0;
for (let k = 0; k < numberLength; k++) {
  let numberValues = number[k];
  sum = sum + numberValues;
}
console.log(sum);
//21;

let uniqArray = [];
let numberValues = 0;
for (let z = 0; z < numberLength; z++) {
  numberValues = number[z];
  if (uniqArray.includes(numberValues) === false) {
    uniqArray.push(numberValues);
  }
}
console.log(uniqArray);
22
let numberAndString = [
  5, 6, 7, 9, 12, 34, 56, 35, 16, 48, 34, 46, 56, 35, 16, 48, 34, 46,"rohim", "korim","abul","babul","kabul","mokbul","bulbul"
];
let numberAndStringLength = numberAndString.length
let numberArray = []
let stringArray = []
for(let p = 0; p< numberAndStringLength; p++){
  const numberAndStringValues = numberAndString[p]
  if(typeof numberAndStringValues === "number"){
    numberArray.push(numberAndStringValues);
  } else if ( typeof numberAndStringValues === "string"){
    stringArray.push(numberAndStringValues);
  }
}
console.log(numberArray);
console.log(stringArray);

//23
let maxAndMinNumbersArray = [5, 6, 7, 9, 12, 34, 56, 35, 16, 48, 34, 46, 56, 35, 16, 48, 34, 46]
let max = []
let min = []
for(let num=0; num<maxAndMinNumbersArray.length; num++){
  
  if(maxAndMinNumbersArray[num] > max){
    max = maxAndMinNumbersArray[num]
  }
}
for(let num=0; num<maxAndMinNumbersArray.length; num++){
  
  if(maxAndMinNumbersArray[num] < max){
    min = maxAndMinNumbersArray[num]
  }
}
console.log(max);
console.log(min);
