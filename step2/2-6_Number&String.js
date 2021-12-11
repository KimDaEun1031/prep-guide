// 1. Number

// 산술
var num2 = num + 2;  // 12
var num3 = num - 2;  // 8
var num4 = num * 2;  // 20
var num5 = num / 2;  // 5
var num6 = num % 2;  // 0
var num7 = num++;    // ++num 과 같다. 11
var num8 = num--;    // --num 과 같다. 9

// 비교
var num = 3;

var result1 = 3 == num;
console.log(result1); // true

var result2 = 3 != num;
console.log(result2); // false

var result3 = 3 === num;
console.log(result3); // true

var result4 = 3 !== num;
console.log(result4); // false

var result5 = 3 > num + 1;
console.log(result5); // false

var result6 = 3 >= num;
console.log(result6); // true

var result7 = 3 < num + 1;
console.log(result7); // true

var result8 = 3 <= num - 1;
console.log(result8); // false

// 복합 할당
var a = 1;

a += 1;  // a = a + 1
a += 2;  // a = a + 2
a -= 1;  // a = a - 1
a *= 3;  // a = a * 3
a /= 2;  // a = a / 2 
a **= 3; // a = a ** 3

// NaN
var a = 0;
var b = 0;
var c = a / b;

console.log(c); // NaN

// isNaN
var a = isNaN(3);
console.log(a); // false

var b = 10;
var c = isNaN(b);
console.log(c); // false

var d = NaN;
var e = isNaN(d);
console.log(e); // true

// typeof
var a = typeof 10;
console.log(a);  // "number"

var b = 20;
var c = typeof b;
console.log(c);  // "number"

// 2. String

// 문자열
var a = "number";
var b = 'string';

// 문자열 붙이기
var s1 = "something";
var s2 = "else";
var result = s1 + s2;

console.log(result); // "somethingelse"

// 문자열 비교
var s1 = "abc";
var s2 = "abc";

var result1 = s1 === s2; 
console.log(result1); // true


var s3 = "abc ";
var s4 = "abc";

var result2 = s3 !== s4; 
console.log(result2); // true

// 문자열 길이
var str1 = "abc";  // 3개의 텍스트를 포함하고 있는 문자열
console.log(str1.length); // 3

var str2 = "   ";  // 공백 3개
console.log(str2.length); // 3

console.log("graph-ql".length); // 8

// 문자열 인덱스
var str = "abcdef";
console.log(str[0]); // "a"

console.log("cde"[2]); // "e"

// 문자열 메소드
'6'.repeat(3); // 666
'hi ken'.includes(' ke'); // true
'what are you doing?'.startsWith('what '); // true
'I am doing FiNe'.endsWith('iNe'); // true
'Are you sure?'.indexOf(' yo'); // 3
'Yeah I am sure'.slice(2, 5); // ah
'I?doubt?that'.split('?'); // ["I", "doubt", "that"]
'Why would you doubt my word?'.split(''); // 한글자씩 분할됨 28길이
'You hAve BeEn DiSHonest'.toLowerCase(); // you have been dishonest
'No wAy!'.toUpperCase(); // NO WAY!