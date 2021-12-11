// 1. Types

// d. Undefined Type

// 초기값이 할당되지 않은 변수
let a;
console.log(a); // undefined

// 초기값이 할당되지 않은 매개변수
function foo (a, b) {
  console.log(a); // 1
  console.log(b); // undefined
}
foo(1);

// 객체에서 존재하지 않는 속성을 접근하는 경우
const something = {
  name: 'Ken'
};
console.log(something.age); // undefined

// e. Null Type
let bar = [ 1, 2, 3 ];
bar = null; // bar라는 변수에 "값이 없음"이라고 표기함

var string = null;
console.log(string === null); // true

// f. Object Type
const person = {};            // 빈 객체 생성
person.name = 'ken';        // 객체 내 Key, Value 생성
console.log(person.name);   // 'ken'
console.log(person);        // { name: 'ken' }
console.log(typeof person); // 'object'

const list = [1, 2, 3];
console.log(typeof list);   // 'object'

function foo () {}
console.log(typeof foo);    // 'function'

// 2. Logical Operators

// 2-1. Logical NOT Operators
console.log(!true);                   // false
console.log(!2);                      // false
console.log(!"abc");                  // false
console.log(!(function foo () {}));   // false
console.log(!{ name: 'ken' });        // false

console.log(!false);                  // true
console.log(!"");                     // true
console.log(!0);                      // true

// Falsy = all false
console.log(0);
console.log(-0);
console.log(false);
console.log(undefined);
console.log(null);
console.log("");
console.log('');
console.log(``);
console.log(NaN);

// Quiz 왼 - 내 풀이 / 오 - 정답
Boolean([ 1, 2, 3 ]);         // true false
Boolean([]);                  // false true
Boolean({ name: 'hello' });   // true false
Boolean({});                  // false true
Boolean('abc');               // true false
Boolean('  ');                // false true
Boolean('   '.trim());        // false true
Boolean(300);                 // true false
Boolean(-10);                 // true false
Boolean(function foo () {});  // false true

// 2-2. Logical OR Operator

// Quiz 왼 - 내 풀이 / 오 - 정답
true || true;                     // true true
true || false;                    // true true
false || true;                    // true true
false || false;                   // false flase
"hello" || {};                    // true hello
[] || "hello";                    // true []
(function foo () {}) || "hello";  // true f foo() {}
false || "";                      // false 공백

// 2-3. Logical AND Operator

// Quiz 왼 - 내 풀이 / 오 - 정답
true && true;                    // true true
true && false;                   // false false
false && true;                   // false false
false && false;                  // false false
"hello" && {};                   // {}  Object 배열
[] && "hello";                   // hello hello
"" && "hello";                   // 공백 공백
(function foo () {}) && "hello"; // hello hello
false && "";                     // false false