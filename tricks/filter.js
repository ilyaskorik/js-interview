Array.prototype.myFilter = function(callback, context) {
    arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};

var numbers = [1, 20, 30, 80, 2, 9, 3];
var newNum = numbers.myFilter(function(n) {
    return n >= 10;
});
console.log(newNum); // [ 20, 30, 80 ]
