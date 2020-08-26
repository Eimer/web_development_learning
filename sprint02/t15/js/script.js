let beginRange = prompt("start: ");
let endRange = prompt("end: ");


function checkDivision(beginRange, endRange) {
let str = "";

    for (let i = beginRange; i <= endRange; i++) {
        if (i % 2 == 0) {
            str += i + " is even";
            if (i % 3 == 0) {
                str += ", a multiple of 3";
                if (i % 10 == 0)
                    str += ", a multiple of 10"; 
            }
            else if (i % 10 == 0)
                    str += ", a multiple of 10"; 
        }
        else if (i % 3 == 0)
            str += i + " is a multiple of 3";
        else if (i % 10 == 0)
            str += i + " is a multiple of 10";
        else if (i % 2 == 0 && i % 10 == 0)
            str += i + " is even, a multiple of 10";
        else 
            str += i + " -";
        str += "\n";
    }
    return str;
}
