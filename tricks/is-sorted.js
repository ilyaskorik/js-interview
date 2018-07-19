function isSorted(arr) {
    return arr.every((val, i, arr) => !i || (val >= arr[i - 1]));
}

console.log(isSorted([1,2,3,4,5]));
console.log(isSorted([1,2,4,3,5]));
console.log(isSorted([1,2,4,4,5]));

console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]))