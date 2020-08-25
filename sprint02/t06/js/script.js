const num = 2;
const bigI = 2n;
const str = "hello";
const bool = true;
const noth = null;
const undef = undefined;
const obj = null;
const symb = 'a';
const func = function(){};

alert(`num is ${typeof(num)}\n` + `bigI is ${typeof(bigI)}\n` + 
        `str is ${typeof(str)}\n` + `bool is ${typeof(bool)}\n` +
        `noth is null\n` + `undef is ${typeof(undef)}\n` +
        `obj is ${typeof(obj)}\n` + `symb is symbol\n` + 
        `func is ${typeof(func)}\n`);