// 1. Boolean
var s = true;
var h = false;

console.log(s === h); // false

// 2. null vs undefined
var nothing1 = null;
console.log(nothing1 === null); // true

var nothing2 = undefined;
console.log(nothing2 === undefined); // true

console.log(nothing1 === nothing2); // false

// 2-1. null
var obj = { name: 'ken' };
obj = null;

// 2-2. undefined
var k;
console.log(k); 

var o = undefined;
console.log(o);