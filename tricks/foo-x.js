// Чему равно foo.x ?

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

console.log(foo.x);