// Quiz 1

// 1 부터 100 까지 console.log 를 실행한다.
// 3의 배수는 "fizz" 라는 문자열을 로그한다.
// 5의 배수는 "buzz" 라는 문자열을 로그한다.
// 3과 5의 공배수는 "fizzbuzz" 라는 문자열을 로그한다.
// 나머지 숫자들을 해당 숫자 자체를 로그한다.

for (var i = 1 ; i <= 100 ; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
      continue;
    }
  
    if ( i % 3 === 0) {
      console.log("fizz");
      continue;
    } 
  
    if ( i % 5 === 0) {
      console.log("buzz");
      continue;
    }
  
    console.log(i);
}

// Quiz 2 - 세 개의 수 중 가장 큰 수가 무엇인지 찾으시오.

// Math.max 를 사용하지 않는다.
// a, b, c의 값이 바뀌더라도 항상 정확한 결과가 나오도록 한다.

var a = 50;
var b = 100;
var c = 30;

if ( a > b ) {
	if ( a > c) {
		console.log(a);
	} else {
		console.log(c);
	}
} else {
	if ( b > c) {
		console.log(b);
	} else {
		console.log(c);
	}
}

// Quiz 3 - 하나의 문자열 값을 다른 문자열의 문장에서 찾아서 시작 인덱스와 끝 인덱스를 출력하라.

var word = "dolphin";
var sentence = "Where did Jane get the dolphin from, John?";

var word_arr = word.split('');

var indexOfD = sentence.indexOf(word_arr[0] + word_arr[1]);
var indexOfN = sentence.lastIndexOf(word_arr[6] + " ");

console.log(indexOfD, indexOfN);