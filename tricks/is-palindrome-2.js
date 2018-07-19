isPalindrom = s => {
    s = s.replace(/[^a-zA-ZА-Я0-9]+/gi, '').toLowerCase()
    s == [...s.replace(/[^a-zA-ZА-Я0-9]+/gi, '').toLowerCase()].reverse().join``
}

console.log(isPalindrom('а роза упала на лапу азора'))
