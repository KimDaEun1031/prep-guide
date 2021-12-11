// Scope 예제 1
var a = 1; // 어디에서나 접근가능한 변수

function print() { 
    // 지역 스코프의 예) 함수 스코프
    var a = 111;     // 함수 스코프 - 함수 안에서만 접근 가능한 변수
    console.log(a);  // 1
}

print();

// Scope 예제 2
var a = 1;

function print() { 
  console.log(a); // 1
}

print();

// Scope 예제 3
var a = 1;

function print() { 
   var a = 2;
   console.log(a); // 2
}

print();
console.log(a); // 1

// Scope 예제 4
function print() { 
    var a = 2;
    console.log(a); // 2
 }
 
 print();
 console.log(a); // 2