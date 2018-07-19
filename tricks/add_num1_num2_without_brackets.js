const add = (a) => {

    let sum = a;

    const func = (b) => {
        sum += b;
        return func;
    };

    func.valueOf = () => sum;
    func.toString = () => sum;

    return func;
};

console.log(0+ add(2)(3));

