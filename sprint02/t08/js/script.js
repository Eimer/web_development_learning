let inp = prompt();
let convert = Number(inp);

if (isNaN(convert) || convert < 1 || convert > 4)
    alert("Wrong input");
else if (convert == 1)
    alert(convert * 2 / 'a');
else if (convert == 2)
    alert((convert - convert) / 0);
else if (convert == 3)
    alert(0 * Infinity);
else if (convert == 4)
    alert(isFinite(convert * 40000000));
