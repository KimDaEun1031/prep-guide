// Quiz 1 - 8번 라인에서 출력되는 값
function foo () {
    var a = 5;
  
    for (var i = 0; i < a; i++) {
      console.log(a);
    }
  
    console.log(i);  // Error
}

foo();

// 정답 : 5

// Quiz 2 - 6번 라인에서 출력되는 값
var a = 1;

function bar () {

  function foo() {
    console.log(a);  // 1
  }

  foo();
}

bar();

// 정답 : 1

// Quiz 3 - 6번 라인에서 출력되는 값
var a = 1;

function bar () {

  function foo() {
    console.log(a);  // 2
  }
  
  a = 2;

  foo();
}

bar();

// 정답 : 2

// Quiz 4 - 8번 라인에서 출력되는 값
function foo() {
    var a = 1;
  
    function bar () {
      a = 2;
    }
  
    console.log(a); // 1
    bar();
}

foo();


// 정답 : 1

// Quiz 5 - 8번 라인에서 출력되는 값
var x = 1; 
  
function foo () { 
    if (x > 1) { 
        var x = 2; 
    } 
  
    console.log(x); // 1
} 
  
foo();

// 정답 : undefined