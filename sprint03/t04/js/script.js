function concat(string1, string2) {
    let res_str = "";
    if (string2) {
        res_str =  res_str.concat(string1, " ", string2);
        return res_str;
    }
    
    function func () {
        let res_str = "";
        string2 =  prompt("input string 2: ");
        func.count += 1;
        res_str = res_str.concat(string1, " ", string2);
        return res_str;
    }
    func.count = 0;
    return func;
}
