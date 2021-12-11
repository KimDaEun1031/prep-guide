// 배열 선언 3가지
var fruits = new Array();
var fruits = new Array("apple", "orange", "grape");
var fruits = [ 'apple', 'orange', 'grape' ]; 

// 2차원 배열 선언
let board = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['10','11','12'] ];
  
console.log(board); // Array(4)

// 종류가 다른 값을 함께 담기 - 어떤 값이라도 배열 요소에 추가 가능
var arr = [ 1, '3', true ];
var arr1 = [ undefined, null, false, NaN, 1000 ];

// 배열의 길이
var fruits = [ 'apple', 'orange', 'grape' ];
console.log(fruits); // [ 'apple', 'orange', 'grape' ]
console.log(fruits.length); // 3

// 배열의 길이를 반환해주는 함수 - fruits 배열 만의 길이만 반환 
var fruits = [ 'apple', 'orange', 'grape' ];
function getNumOfFruits () {
  return fruits.length; //길이 반환
}
var numOfFruits = getNumOfFruits();
console.log(numOfFruits); // 3

// 조금 더 재사용이 유연한 함수 - 어떤 배열이라도 인자로 보내면 길이를 반환
function getNumOfItems (array) {
    return array.length;
}

var fruits = [ 'apple', 'orange', 'grape' ];
var numOfFruits = getNumOfItems(fruits);
console.log(numOfFruits); // 3

// 배열 요소 접근
var food = [ 'pasta', 'steak', 'rice' ];
var myFavoriteFood = food[1];
console.log(myFavoriteFood); // 'steak'

// 인덱스를 이용해 배열의 해당 인덱스 위치에 자리한 요소 수정
var fibonacci = [ 1, 2, 3, 5, 8, 13 ];

console.log(fibonacci[4]); // 8

fibonacci[4] = false;

console.log(fibonacci[4]); // false

// 배열에 요소 추가
var arr = [];
arr[0] = true;
console.log(arr[0]); // true

arr[2] = true;
console.log(arr[2]); // true

console.log(arr); // [ true, undefined, true ]

// 메서드를 사용한 추가
var arr = [];

// push 메서드는 배열의 뒤에 요소를 추가합니다.
arr.push(1); // arr은 [1]이 됩니다.
arr.push(2); // arr은 [1, 2]가 됩니다.

// pop 메서드는 배열의 뒤에서 하나의 요소를 제거합니다.
arr.pop(); // arr은 다시 [1]이 됩니다.
arr.pop(); // arr은 다시 빈 배열이 됩니다.