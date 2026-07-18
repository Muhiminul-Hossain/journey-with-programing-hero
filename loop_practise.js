//1
for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}
//2
for (let num = 1; num <= 10; num++) {
  console.log(num);
}
//3
let countDown = 10;
while (countDown > 0) {
  console.log(countDown);
  countDown--;
}
//4
let loopCountinuing = 1;
while (loopCountinuing <= 7) {
  console.log("Loop Solse");
  loopCountinuing++;
}
//5
for (let evenNumber = 2; evenNumber <= 30; evenNumber += 2) {
  console.log(evenNumber);
}
//6
let sum = 0;

for (let sumNumber = 1; sumNumber <= 30; sumNumber++) {
  sum = sum + sumNumber;
}
console.log(sum);
//7
let multipicationNumber = 2;
for (let j = 1; j <= 10; j++) {
  let multipicationOfTheNumber =
    multipicationNumber + "X" + j + "=" + j * multipicationNumber;
  console.log(multipicationOfTheNumber);
}
//8
for(let k = 20 ; k>0; k--){
  console.log(k);
}
//9
let sumOfEvenNumbers =0
for(let evenNumbers=2; evenNumbers<=50; evenNumbers+=2 ){
  sumOfEvenNumbers = sumOfEvenNumbers + evenNumbers
}
console.log(sumOfEvenNumbers);
//10
for( let breakNumebr = 1; breakNumebr <=50; breakNumebr++){
  if(breakNumebr >30){
    break
  }
}
console.log("The number loop is Break");