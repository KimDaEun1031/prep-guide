// 1. Function(함수)

// 함수 add 선언 (생성)
function add (x, y) {
    var result = x + y;
    console.log(result);
    return result;
}

// 함수 실행
function foo () {
    for (let i = 1; i <= 3; i++) {
      console.log(i);
    }
  }
  
// 함수 실행
foo();

// 2. 매개 변수
// 함수 선언 (생성)
function add (x, y) {
    var result = x + y;
    console.log(result);
    return result;
}
  
// 함수 실행
add(3, 5);

// 중복 구문

// 중복 구문을 함수로
function repeatLog (count) {
    for (let i = 1; i <= count; i++) {
      console.log(i);
    }
}

// 1~3 출력
// repeatLog 함수 내부에서 `count`라는 변수는 3을 가르킵니다.
repeatLog(3);

// 1~5 출력
// repeatLog 함수 내부에서 `count`라는 변수는 5을 가르킵니다.
repeatLog(5);

// 1~7 출력
// repeatLog 함수 내부에서 `count`라는 변수는 7을 가르킵니다.
repeatLog(7);


// 3. Return

// 함수 종료
function doSomething () {
    console.log('start!');
    var a = 3;
    var b = 2;
  
    if (a > b) {
      console.log('a is bigger than b!');
      return;
    }
    // 위의 if 문은 항상 true가 되기에 아래의 로그는 출력되지 않음
    console.log('I am the last console.log!');
}

doSomething();

// 값 반환
function getA () {
    return 1;  // getA 함수를 실행 시 1 을 반환한다.
}
  
var a = getA();  // === var a = 1;
console.log(a);

// 예제 1
function doSomething () {
    var a = 3;
    var b = 2;
  
    if (a > b) {
      return;  // 여기서 실행 -> 종료
    }
  
    return 3; // 실행되지 않음
}

var a = doSomething(); // 값이 없기에 undefined 출력
console.log(a);

// 예제 2
function foo (a, b) {
    if (a < b) {
      return a;
    }
}

const result1 = foo(10, 20);
const result2 = foo(20, 20);

console.log(result1); // ? 
console.log(result2); // ?
// -> 위의 매개변수에 할당된 a의 값은 전부 b와 작거나 같기 때문에
// if 문은 실행되지 않는다. -> return 구문이 없음
// 두 로그 다 undefined 가 출력된다.