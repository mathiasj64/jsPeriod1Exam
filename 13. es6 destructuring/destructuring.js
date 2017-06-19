/*var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]*/

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2

[z, y] = [y, z];
console.log(y); // 2
console.log(z); // 1