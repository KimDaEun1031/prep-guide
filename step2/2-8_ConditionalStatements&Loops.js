// 1. 조건문 if문

// 중첩
var something = true;
var moreSomething = true;

if (something) {
  console.log("I am inside something");

  if (moreSomething) {
    console.log("I am inside moreSomething");
  } else {
    console.log("I never gets called.");
  }
} else {
  console.log("I never gets called either.");
}

// Quiz
// Truthy 값이 조건으로 주어질 경우, 해당 조건문이 실행되고
// 그러지 않을 경우 다음 조건으로 넘어간다.

// #1. 무엇이 출력될까요? 1
if (true) {
    console.log(1);
  } else if (true) {
    console.log(2);
  } else {
    console.log(3);
  }
  
// #2. 무엇이 출력될까요? 2 
if ("") {
    console.log(1);
  } else if ("a") {
    console.log(2);
  } else {
    console.log(3);
  }
  
// #3. 무엇이 출력될까요? 2
if (null) {
    console.log(1);
  } else if (5) {
    console.log(2);
  } else {
    console.log(3);
  }

// 2. 반복문 for문

// 반복문 없이 출력
var name = "ken";

console.log(name[0]); //k
console.log(name[1]); //e
console.log(name[2]); //n

// 반복문으로 출력
var name = "ken";

for (var i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// break 문

// break 문을 쓰지 않은 for 문
console.log('before for loop');

for (var i = 1; i < 11; i += 2) {
  console.log(i); // 1, 3, 5, 7, 9
}

console.log('after for loop');

// break 문으로 제한을 걸었을 때
console.log('before for loop');

for (var i = 1; i < 11; i += 2) {
  if (i === 7) {
    break;
  }

  console.log(i); // 1, 3, 5
}

console.log('after for loop');

// continue 문
console.log('before for loop');

for (var i = 1; i < 11; i += 2) {
  if (i === 7) {
    continue;
  }

  console.log(i); // 1, 3, 5, 9
}

console.log('after for loop');

// Quiz 1 문자열을 역순으로 출력하라.
var name = "ken";

// 역순으로 한 글자씩 출력하는 반복문을 작성해보세요.
var name = "ken";

for (var i = name.length-1; i >= 0; i--) {
	console.log(name[i]); // n e k
}

// Quiz 2 문자열의 홀수 번째 글자만 출력하라.
var longText = "0i1a2m3k4e5n";

// 홀수번째 글자만 출력하는 코드를 작성해보세요.
var longText  = "0i1a2m3k4e5n";

for (var i = 1 ; i < longText.length ; i += 2) {
	console.log(longText [i]); // i a m k e n
}