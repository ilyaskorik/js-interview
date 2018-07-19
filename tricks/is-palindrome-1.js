function isPalindrom(str) {
    str = str.replace(/[^A-ZА-Я0-9]/ig, "").toLowerCase();
    return str == str.split('').reverse().join('');
}

console.log(isPalindrom('а роза упала на лапу азора'))
