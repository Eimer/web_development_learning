function solver(a, b, c, d, e) {
    let x;

    if (!a || !b || !c || !d || !e)
        return("Wrong input");
    else if (typeof(a) != "number" || typeof(b) != "number" 
        || typeof(c) != "number" || typeof(d) != "number" 
        || typeof(e) != "number")
        return("Wrong input");
    else {
        x = (a * a) - (5 * b * c) + (d / 3) + e;
        return x.toFixed(2);
    }        
}
