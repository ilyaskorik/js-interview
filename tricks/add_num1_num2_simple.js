const add = (a) => {

    let sum = a;

    const func = (b) => {
        if (b) {
            sum += b;
            return func;
        } else {
            return sum;
        }
    };

    return func;
};
console.log(
    add(2)(3)()
);
