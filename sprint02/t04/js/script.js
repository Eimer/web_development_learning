function solver(a, b, c, d, e) {
    if (!a || !b || !c || !d || !e)
        return("Wrong input");
    else
        return (a * a) - (5 * b * c) + (d / 3) + e;
}

alert(solver(1,2,3,4,5));