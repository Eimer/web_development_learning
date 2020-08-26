let reg_valid = new RegExp("^[a-zA-Z]*$");
let first_name = prompt("Enter your first_name: ");


if (!reg_valid.test(first_name)) {
    alert("Wrong input!");
    console.log("Wrong input!");
}
else {
    let last_name = prompt("Enter your last_name");

    if (!reg_valid.test(last_name)) {
        alert("Wrong input!");
        console.log("Wrong input!");
    }
    else {
        alert("Hello, " + first_name.charAt(0).toUpperCase() + first_name.slice(1)
        + " " + last_name.charAt(0).toUpperCase() + last_name.slice(1));
        console.log("Hello, " + first_name.charAt(0).toUpperCase() + first_name.slice(1) 
        + " " + last_name.charAt(0).toUpperCase() + first_name.slice(1));
    }
}