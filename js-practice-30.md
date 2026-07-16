# JS Practice — 30 Problems (Output Given, Tumi Code Lekho)

Prottekta problem e ami **expected output** disi. Tomar kaj hocche oi output ta anar jonno code likha — variable declare kora, math operator, shorthand operator, parseInt/parseFloat/toFixed use kore. Answer key niche ache, kintu age nijei try koro.

---

## 🟢 EASY (5) — Syntax hand practice

**1.** Output: `25`
Two variable (`a = 10`, `b = 15`) banaye jog koro.

**2.** Output: `"Mahdi is 20 years old"`
`name` ar `age` variable use kore string concatenation koro.

**3.** Output: `8`
`x` variable ke `5` diye declare koro, tারপর shorthand operator diye `3` add koro.

**4.** Output: `"number"`
`typeof` use kore `42` er data type বার koro।

**5.** Output: `1`
`17` ke `4` diye modulus (`%`) korle remainder ber koro।

---

## 🟡 MID-RANGE (15)

**6.** Output: `"105"` (string, not number)
`10` ar `"5"` কে যোগ কর।

**7.** Output: `5`
`"25"` ke `parseInt()` diye number banaye `5` diye divide koro (kono decimal chara).

**8.** Output: `7.5`
`"7.5abc"` string ta ke number e convert koro (parseFloat use kore)।

**9.** Output: `10.00`
`10` ke `toFixed(2)` diye 2 decimal point porjonto dekhao।

**10.** Output: `9`
`x = 3` diye declare kore, `x` ke square (nijer sathe multiply) koro।

**11.** Output: `1`
`10` ke `3` diye divide korle je remainder ashe, oita ber koro।

**12.** Output: `21`
`let count = 20;` diye শুরু kore, shorthand increment operator diye `1` bariye dao।

**13.** Output: `"NaN"`
`parseInt("hello")` er result ta console.log koro, output ki আসে dekho (type ta o check koro)।

**14.** Output: `15`
`let score = 10;` declare kore, `+=` shorthand diye `5` add koro।

**15.** Output: `3.14`
`"3.14159"` ke parseFloat diye number banaye, `toFixed(2)` diye 2 decimal e round koro।

**16.** Output: `true`
`typeof "hello" === "string"` — eta comparison koro ar result dekhao।

**17.** Output: `100`
`let price = 100;` — const na diye let use kora hoyese keno, eta bujhaye ekTa comment likho code er upore, ar just value ta declare kore print koro।

**18.** Output: `50`
`x = 100` theke shorthand `-=` diye `50` biyog koro।

**19.** Output: `6`
`let num = 2;` declare kore, `*=` shorthand diye `3` diye multiply koro।

**20.** Output: `"20"` (string type)
Number `20` ke `String()` diye string e convert koro, ar `typeof` diye check koro।

---

## 🔴 HARD (10)

**21.** Output: `"The total is: 150.50 taka"`
Ekটা `price` (number, `150.5`) variable diye string template/concatenation e `toFixed(2)` use kore output banao।

**22.** Output: `NaN`
Emon ekটা expression banao jekhane string ke number diye subtract korle `NaN` ashe (e.g. `"hello" - 5`)।

**23.** Output: `5`
User input hishebe dhoro `"5.99"` eshese. Eta ke `parseInt()` diye clean whole number banao (decimal bad diye)।

**24.** Output: `6.00`
Ekটা average calculate koro: `(4 + 6 + 8) / 3`, tারপর `toFixed(2)` diye format koro।

**25.** Output: `"even"`
`let num = 8;` diye, modulus (`%`) use kore check koro number ta even naki odd, ar console e result string hishebe dekhao (ternary use korle valo hoy, na parle if/else)।

**26.** Output: `21`
`let age = "21";` (string hishebe deya) ke number e convert kore, tারপর eমনভাবে print koro je eta ekটা real number, string na (typeof diye verify)।

**27.** Output: `"Total: 25 items"`
`let a = 10, b = 15;` — dutake add kore, template literal diye pura sentence ta banao।

**28.** Output: `2.5`
`5 / 2` er result direct dekhao (JS e integer division nai, eta ki dey seita dekho)।

**29.** Output: `"10.50"` (string, 2 decimal)
`10.5` number ke `toFixed(2)` diye convert koro, tারপর `typeof` diye dekhao result ta ki string hoye gese naki number ache।

**30.** Output: `100`
Ekটা variable `x = "10"` (string) ar `y = 10` (number) — dutake emon bhabe multiply koro (`*`) je output number `100` ashe, string concatenation na hoye — bujhaw keno `*` operator `+` operator theke alada behave kore।

---

## ✅ Answer Key (Nijei try korar por dekho)

```js
// 1
let a = 10,
  b = 15;
console.log(a + b); // 25

// 2
let name = "Mahdi",
  age = 20;
console.log(name + " is " + age + " years old");

// 3
let x = 5;
x += 3;
console.log(x); // 8

// 4
console.log(typeof 42); // "number"

// 5
console.log(17 % 4); // 1

// 6
console.log(10 + "5"); // "105"

// 7
console.log(parseInt("25") / 5); // 5

// 8
console.log(parseFloat("7.5abc")); // 7.5

// 9
console.log((10).toFixed(2)); // "10.00"

// 10
let x2 = 3;
console.log(x2 * x2); // 9

// 11
console.log(10 % 3); // 1

// 12
let count = 20;
count++;
console.log(count); // 21

// 13
console.log(parseInt("hello")); // NaN
console.log(typeof parseInt("hello")); // "number" (NaN is type number!)

// 14
let score = 10;
score += 5;
console.log(score); // 15

// 15
console.log(parseFloat("3.14159").toFixed(2)); // "3.14"

// 16
console.log(typeof "hello" === "string"); // true

// 17
let price = 100; // let use kora hoyese kারon eta future e change hote pare
console.log(price);

// 18
let x3 = 100;
x3 -= 50;
console.log(x3); // 50

// 19
let num = 2;
num *= 3;
console.log(num); // 6

// 20
console.log(String(20));
console.log(typeof String(20)); // "string"

// 21
let price2 = 150.5;
console.log("The total is: " + price2.toFixed(2) + " taka");

// 22
console.log("hello" - 5); // NaN

// 23
console.log(parseInt("5.99")); // 5

// 24
console.log(((4 + 6 + 8) / 3).toFixed(2)); // "6.00"

// 25
let num2 = 8;
console.log(num2 % 2 === 0 ? "even" : "odd");

// 26
let age2 = "21";
let realAge = Number(age2);
console.log(realAge, typeof realAge); // 21 "number"

// 27
let a2 = 10,
  b2 = 15;
console.log(`Total: ${a2 + b2} items`);

// 28
console.log(5 / 2); // 2.5

// 29
let result = (10.5).toFixed(2);
console.log(result, typeof result); // "10.50" "string"

// 30
let x4 = "10",
  y = 10;
console.log(x4 * y); // 100 — karon * operator string ke automatic number e convert kore, + er moto concatenate kore na
```
