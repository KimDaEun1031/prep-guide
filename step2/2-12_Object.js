// 예제
var person1 = {
    name: "Ken Huh",
    age: 13,
    address: "서울특별시 강남구 삼성로 86길 20"
};

// 객체에 저장된 내용 가져오기
var person1 = {
    name: "Ken Huh",
    age: 13,
    address: "서울특별시 강남구 삼성로 86길 20"
};

var myName = person1.name;
var myAge = person1.age;

console.log(myName); // "Ken Huh"
console.log(myAge); // 13

var person1 = {
    name: "Ken Huh",
    age: 13,
    address: "서울특별시 강남구 삼성로 86길 20"
};

var myName = person1["name"];
var myAge = person1["age"];

console.log(myName); // "Ken Huh"
console.log(myAge); // 13

// 객체에 새로운 키/값 추가
var person = {
    name: "Ken Huh"
};

console.log(person.name); // "Ken Huh"
console.log(person.age); // undefined (존재하지 않는 key/value)

// 추가
person.age = 13; // 혹은 person["age"] = 13;

console.log(person.age); // 13

// 객체 키/값 수정
var person = {
    name: "Ken Huh",
    age: 13
};

console.log(person.name); // "Ken Huh"
console.log(person.age); // 13

// 수정
person.age = 15; // 혹은 person["age"] = 15;

console.log(person.age); // 15

// 객체 키/값 삭제
var person = {
    name: "Ken Huh",
    age: 13
};

console.log(person.name); // "Ken Huh"
console.log(person.age); // 13

// 삭제
delete person.age;

console.log(person.age); // undefined (더 이상 존재하지 않는 key/value)

// 객체 순회
const sample = {
    one: 1,
    two: 2,
    three: 3
};

for (let prop in sample) { // prop 변수에 sample 속성이 하나씩 담김
    console.log(prop); // one two three
    console.log(sample[prop]); // 1 2 3 || 객체 속성은 대괄호를 이용해 접근 가능
}

// 객체 예제 1
const me = 'Ken Huh';

function getAge () {
  return 36;
}

const person = {
  name: me, // 이미 정의된 변수 사용
  age: getAge() // 이미 정의된 함수 사용
};

// 객체 예제 2
const property = 'name';

const obj = {
  [property]: 'Ken Huh'  // 대괄호를 사용해 다른 변수에 저장된 문자열을 속성의 이름으로 씀
};

obj.property;  // undefined
obj.name;      // 'Ken Huh'

// 점 표기법 예제
const person = {}; // Empty

// Dot notation
person.name = 'Ken Huh';
person.age = 36;
person.languages = ['Korean', 'English'];

console.log(person);
console.log(person.age);
console.log(person.languages);

// 괄효 표기법 예제
// Bracket notation
person['한국 나이'] = 36;

// Method
const person = {
    greet: function() {
      return 'hello';
    }
};

person.greet(); // 'hello';

// Arrays
const arr = [ 1, 2, 3 ];

console.log(arr[0]);    // 1
console.log(arr.title); // undefined

arr.title = 'Vanilla Coding';

console.log(arr.title); // 'Vanilla Coding'

// Functions
function foo (a, b) {
    return a + b + 3;
}

console.log(foo.title); // undefined

foo.title = 'Vanilla Coding';

console.log(foo.title); // 'Vanilla Coding'

console.log(foo(1, 2)); // 6