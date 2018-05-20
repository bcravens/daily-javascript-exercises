//Reverse a string
var str = "bradley"
//1
function reverse1(str) {
    return str.split("").reverse().join("");
}
// console.log(reverse1(str))

//2
function reverse2(str) {
    let s = "";
    for (var i = str.length - 1; i >= 0; i--) {
        s += str[i];
    }
    return s;
}
// console.log(reverse2(str))

//3
function reverse3(str) {    
    if (str === "") {
        return "";
    } else {
        // console.log(str.substr(1) + str.charAt(0))
        return reverse3(str.substr(1)) + str.charAt(0)
    }
}   
console.log(reverse3(str))
