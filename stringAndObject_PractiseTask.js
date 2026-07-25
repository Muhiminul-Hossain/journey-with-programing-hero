// Task 1.1
let str = "Hello";
let arr = ["h", "e", "l", "l", "o"];
console.log(str.length, arr.length);
//Task 1.2
const js = "JavaScripit";
console.log(js.split(""));
const cat = ["c", "a", "t"];
console.log(cat.join(""));
//Task 2.1
let name = "JavaScript";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
let trimWord = "  Hi there   ";
console.log(trimWord.trim());
//Task 3.1
let sentence = "Learning JavaScript is Fun!";
console.log(sentence.slice(0, 9));
console.log(sentence.slice(23, 30));
// Task 3.2
console.log("Hello".concat(" World"));
console.log("Hello" + " World");
//Task 4.1
const jsReverseTxt = "JavaScript";
const jsReverseTxtSplit = jsReverseTxt.split("");
const jsReverseTxtSplitReverse = jsReverseTxtSplit.reverse();
const finalJsReverseTxt = jsReverseTxtSplitReverse.join("");
console.log(finalJsReverseTxt);
let finalJsReverseTxtInLoop = "";
for (let letter of jsReverseTxt) {
  finalJsReverseTxtInLoop = letter + finalJsReverseTxtInLoop;
}
console.log(finalJsReverseTxtInLoop);

//Object Practise Task
//5.1
const student = {
  name: "Mahdi",
  age: 20,
  grade: "Golden Duck",
  isEnrolled: true,
};
console.log(student);
console.log(student.name);
//5.2
//Whats is an Object?
//Object is a js fundamental concept of programing languages which provides to reserve many data with their specific keys.Using object we can a reserve sebarel type of data from a user , product etc.
// "An object is a JavaScript data type used to store multiple related values as key-value pairs. Each key has a value, and the value can be any data type (string, number, array, function, etc.). We use objects to group related data together, like storing a user's name, age, and email in one place." (AI)
//6.1
let car = { brand: "Toyota", model: "Corolla", year: 2022 };
console.log(car.brand);
console.log(car["model"]);
car["color"] = "blue";
((car.year = 2023), console.log(car));
//7.1
let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
let arrayOfKeys = Object.keys(book);
let arrayOfValues = Object.values(book);
delete book.pages;
console.log(arrayOfKeys);
console.log(arrayOfValues);
console.log(book);
//7.2
let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701",
  },
};
console.log(user.address.city);
let addCountry = (user["address"]["country"] = "Ireland");
delete user["address"]["zip"];
console.log(user);
//8.1
let scores = { math: 90, science: 85, art: 95 };
let sum = 0;
for (let keyAndValues in scores) {
  let values = scores[keyAndValues];
  sum = sum + values;

  console.log(keyAndValues + ":" + values);
}
console.log(sum);
//9.1
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};
let emailLowecase = contact["email"].toLowerCase();
console.log(emailLowecase);
for( let eachKeys in contact){
    const contactValues = contact[eachKeys]
    console.log(eachKeys +" : " + contactValues);
}
let newPropertiesaAdd = contact["newProperties"] =[]
contact["newProperties"]
console.log(contact);