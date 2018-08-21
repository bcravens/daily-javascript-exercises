//Reverse a string
// var str = "bradley"
function reverse(str) {
    return str.split("").reverse().join("");
}
// console.log(reverse(str))

function reverse1(str) {
    let s = "";
    for (var i = str.length - 1; i >= 0; i--) {
        s += str[i];
    }
    return s;
}
// console.log(reverse2(str))

function reverse2(str) {
    if (str === "") {
        return "";
    } else {
        return reverse2(str.substr(1)) + str.charAt(0);
    }
}
// console.log(reverse3(str))

// ------------------------------------------------------- //
//Factorize a number
// var num = 5;
function factor(num) {
    let n = 1;
    for (var i = 2; i <= num; i++) {
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
        return (num * factor1(num - 1));
    }
}
// (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
// console.log(factor1(num));

// ------------------------------------------------------- //
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
            return new Promise((res, rej) => {
                rej(error)
            });
        }
    })
}

// prom(failedPromise, 5).then((val) => {
//     console.log(val)
// }).catch((error) => {
//     console.log(`Outer error: ${error.message}`)
// })

// ------------------------------------------------------- //
//Palindromes
// var word = "Race Car123";
function palindrome(str) {
    let wordArray = str.trim().split("");
    let result = "";
    wordArray.forEach((letter) => {
        letter = letter.trim();
        letter = letter.replace(/[0-9]/, '');
        if (letter) result += letter;
    })
    let reverse = result.split("").reverse().join("").toLowerCase();
    return result.toLowerCase() === reverse;
}

function palindrome1(str) {
    let word = str.trim().split("").map((letter) => {
        return letter.trim().replace(/[0-9]/, '');
    }).join("");
    return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
}
// console.log(palindrome(word));

// ------------------------------------------------------- //
//Find longest word in a string
// var sentence = "This is a really cool sentence";

function longestWord(str) {
    return str.trim().split(" ").reduce((pre, current) => {
        return current.length > pre.length ? current : pre;
    })
}
// console.log(longestWord(sentence));

// ------------------------------------------------------- //
//Title case a sentence 
// var sentence = "this should be title cased";

function titleCase(str) {
    let wordArray = str.split(" ");
    let result = "";
    wordArray.forEach((word) => {
        word = word.charAt(0).toUpperCase() + word.substr(1);
        result ? result += word + " " : result = word + " ";
    })
    return result;
}
// console.log(titleCase(sentence))

function titleCase1(str) {
    return str.toLowerCase().split(' ').map((word) => {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}
// console.log(titleCase1(sentence));

// ------------------------------------------------------- //
//Return largest number from each array
// var arrayOfNums = [ [5, 2, 3, 4], [1, 2, 8, 4], [1, 20, 3, 4] ];

function largestNumberInArray(daddyArray) {
    return daddyArray.map((array) => {
        return array.reduce((pre, current) => {
            return current > pre ? current : pre;
        })
    })
}
// console.log(largestNumberInArray(arrayOfNums));

// ------------------------------------------------------- //
//Confirm the ending of a string
// var sentence = "never gonna give you up never gonna let you down";
function confirmEnding(str, target) {
    let index = str.indexOf(target);
    if (index > -1) {
        let sub = str.substr(index);
        return sub === target
    }
    return false;
}
// console.log(confirmEnding(sentence, "gonna let"));

function confirmEnding1(string, target) {
    return string.substr(-target.length) === target ? true : false;
}
// console.log(confirmEnding1(sentence, "you down"));

// ------------------------------------------------------- //
//Truncate a string
var sentence = "this string should be truncated";

function truncate(str, num) {
    let s = str.substr(0, num);
    if (s.length < str.length) {
        if (s.length <= 3) {
            return s + "...";
        } else {
            return s.substr(0, s.length - 3) + "...";
        }
    }
    return s;
}
// console.log(truncate(sentence, 14));

function truncate1(str, num) {
    if (str.length > num) {
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
    }
    return str;
}
console.log(truncate1(sentence, 14));

//angular stuff i might need later but figured out a better way 

    // @HostListener('paste', ['$event']) blockPaste(e: ClipboardEvent) {
    //     let currentValue = '';
    //     let result = '';
    //     let input = e.clipboardData.getData('Text');
    //     if (input) {
    //         input.split("").forEach(char => {
    //             if (this.exp.test(char)) result += char;
    //         })
    //     }
    //     if (this.control) {
    //         currentValue = this.control.value;
    //         if (currentValue) result = currentValue += result;
    //         this.control.setValue(result);
    //     } else if (this.input) {
    //         currentValue = this.input.value;
    //         if (currentValue) result = currentValue += result;
    //         this.input.value = result;
    //     }
    //     e.preventDefault();
    // }
    
    // @HostListener('input', ['$event']) onInput(e: any) { //InputEvent
    //     console.log('input');
    //     console.log(e)
    //     // if (e.inputType == 'deleteContentBackward') {
    //     //     if (this.control) {
    //     //         let value = this.control.value;
    //     //         if (value && value.length == 0) {
    //     //             this.control.setValue('')
    //     //         }
    //     //     } else {

    //     //     }
    //     //     // this.control ? this.control.setValue('') : this.input.value = '';
    //     //     e.preventDefault();
    //     // }
    // }
