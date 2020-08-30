function addWords(obj) {
    let reg = /\s[\s]*/;
    let splited = obj.words.split(reg);

    return splited;
}

const obj = {
    words: "hello     word   to the death        "
}

console.log(addWords(obj));