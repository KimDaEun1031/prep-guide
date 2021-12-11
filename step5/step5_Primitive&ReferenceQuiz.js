// Quiz 1
const person = {
    age: 30
};

const something = person.age;

person.age = 50;

console.log(something); // 30

// 정답 : 30

// Quiz 2
let one = { name: "one" };
const two = { name: "two" };

const something = one;

one = { name: "ONE" };

console.log(something); // one

// 정답 : { name: "one" }

// Quiz 3
let one = 1;
const two = 2;

const something = one;

one = 101;

console.log(something); // 1

// 정답 : 1

// Quiz 4
let ken = {
    name: "ken",
    age: 30
};
  
const wan = {
    name: "wan",
    age: 35
};
  
const people = [ ken, wan ];
  
ken = {
    name: "KEN",
    age: 38
};
  
console.log(people);  // [ken , wan]
console.log(ken === people[0]);  // false

// 정답 : [{...}, {...}] / false

// Quiz 5
var secret = {
    data: "I am secret"
};
  
function destroy (stuff) {
    stuff = null;
}
  
destroy(secret);
  
console.log(secret); // null

// 정답 : { data: 'I am secret' }