//Reverse a string
// var str = "bradley"
//1
function reverse(str) {
    return str.split("").reverse().join("");
}
// console.log(reverse(str))

//2
function reverse1(str) {
    let s = "";
    for (var i = str.length - 1; i >= 0; i--) {
        s += str[i];
    }
    return s;
}
// console.log(reverse2(str))

//3
function reverse2(str) {    
    if (str === "") {
        return "";
    } else {
        return reverse3(str.substr(1)) + str.charAt(0);
    }
}   
// console.log(reverse3(str))

//Factorize a number
// var num = 5;
function factor(num) {
    let n = 1;
    for (var i = 2; i <= num; i ++) {
        n *= i;
    }
    return n;
}
// console.log(factor(num));

function factor1(num) {
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * factor1(num -1));
    }
}
// (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
// console.log(factor1(num));

//Promises
function successfulPromise() {
    return new Promise((res, rej) => {
        res("success!");
    }) 
}

function failedPromise() {
    return new Promise((res, rej) => {
        rej(new Error("error!"));
    }) 
}

function prom(somePromise, times) {
    return somePromise().then((val) => {
        return val; 
    }).catch((error) => {
        if (times > 0) {
            console.log(`there was an error: ${error} trying ${times - 1} more times`);
            return prom(somePromise, times - 1);
        } else {
            return new Promise((res, rej) => { rej(error) });
        }
    })
}

prom(failedPromise, 5).then((val) => {
    console.log(val)
}).catch((error) => {
    console.log(`Outer error: ${error.message}`)
})




