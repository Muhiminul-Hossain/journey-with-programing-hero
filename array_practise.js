//1
let number = [12, 34, 56, 35, 16, 48, 34, 46];
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
