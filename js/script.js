function padString(str, num, symb = ')', boo = true) {
    if (typeof str === 'undefined') return 'some error';
    if (typeof num === 'undefined') return 'some error';
    if (str.length >= num) return str.substring(0, num);
    for (let i = str.length; i < num; i++) {
        if (boo) {
            str = str + symb;
        }
        else {
            str = symb + str;
        }
    }
    return str;
}
const result = padString(`hello`, 8, `*`, false);
const result2 = padString(`hello`, 10, `*`);
const result3 = padString(`hello`, 10);
console.log(result);
console.log(result2);
console.log(result3);
