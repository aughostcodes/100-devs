// These exercises from https://the-winter.github.io/codingjs/

// WARMUP-1

/* sleepIn - The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in. */
function sleepIn(weekday, vacation) {
    if (weekday && vacation) {
        return true;
    } else if (weekday && !vacation) {
        return false;
    }
    return true;
}

/* monkeyTrouble - We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble. */
function monkeyTrouble(aSmile, bSmile) {
    if ((aSmile && bSmile || (!aSmile && !bSmile))) {
        return true;
    }
    return false;
}

/* sumDouble - Given two int values, return their sum. Unless the two values are the same, then return double their sum. */
function sumDouble(a, b) {
    if (a === b) {
        return (a + b) * 2;
    }
    return a + b;
}

/* diff21 - Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21. */
function diff21(n) {
    if (n < 21) {
        return 21 - n;
    }
    return (n - 21) * 2;
}

/* parrotTrouble - We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble. */
function parrotTrouble(talking, hour) {
    return (talking && (hour < 7 || hour > 20));
}

/* makes10 - Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10. */
// HAD A WEIRD BREAKTHROUGH RIGHT HERE. FOCUS ON LEARNING SIMPLE RETURN STATEMENTS USING BOOLEANS INSTEAD OF LARGE NESTED IF/ELSE LOOPS
function makes10(a, b) {
    return (a === 10 || b === 10) || (a + b === 10);
}

/* nearHundred - Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number. */
function nearHundred(n) {
    return ((Math.abs(n) >= 90 && Math.abs(n) <= 110) || (Math.abs(n) >= 190 && Math.abs(n) <= 210)) ? true : false;
}

/* posNeg - Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative. */
function posNeg(a, b, negative) {
    if (negative === true && (a < 0 && b < 0)) {
        return true;
    } else if (negative === false && (a < 0 && b > 0 || a > 0 && b < 0)) {
        return true;
    } else {
        return false;
    }
}
// Refactor this?

/* notString - Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. */
function notString(str) {
    let notStr = 'not ';
    return str.startsWith(notStr) ? str : notStr.concat(str);
}

/* missingChar - Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive). */
function missingChar(str, n) {
    return str = str.replace(str.charAt(n), '');
}

/* frontBack - Given a string, return a new string where the first and last chars have been exchanged. */
function frontBack(str) {
    let newStr = [...str];
    let strFirst = newStr[0];
    let strLast = newStr[newStr.length - 1];
    newStr[0] = strLast;
    newStr[newStr.length - 1] = strFirst;
    return newStr.join('');
}
// Can refactor the variables, but I like the readability for now

/* front3 - Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front. */
function front3(str) {
    str = str.split('');
    let frontString = '';
    let result = '';

    if (str.length >= 3) {
        for (let i = 0; i < 3; i++) {
            frontString += str[i];
        }
    } else if (str.length < 3) {
        for (let i = 0; i < str.length; i++) {
            frontString += str[i];
        }
    }

    for (let i = 0; i < 3; i++) {
        result += frontString;
    }
    return result;
}
// Definitely an easier way to do it, but it passes all tests

/* backAround - Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 'tcatt' The original string will be length 1 or more. */
function backAround(str) {
    let lastChar = str.charAt(str.length - 1);
    str = `${lastChar}${str}${lastChar}`;
    return str;
}

/* or35 - Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator). */
// function or35(n) {
// if (n % 3 === 0 || n % 5 === 0) {
//     return true;
// } else {
//     return false;
// }
// }
const or35 = n => (n % 3 === 0 || n % 5 === 0) ? true : false;
// Getting more comfortable with ternaries and arrow functions

/* front22 - Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there. */
function front22(str) {
    let firstTwoChars = str.charAt(0) + str.charAt(1);
    return str = `${firstTwoChars}${str}${firstTwoChars}`;
}
// Got this one very quickly :)

/* startHi - Given a string, return true if the string starts with 'hi' and false otherwise. */
// function startHi(str) {
//     return (str.startsWith('hi')) ? true : false;
// }
const startHi = str => str.startsWith('hi') ? true : false;

/* icyHot - Given two temperatures, return true if one is less than 0 and the other is greater than 100. */
function icyHot(temp1, temp2) {
    if ((temp1 > 100 && temp2 < 0) || (temp1 < 0 && temp2 > 100)) {
        return true;
    }
    return false;
}

/* in1020 - Given 2 int values, return true if either of them is in the range 10..20 inclusive. */
function in1020(a, b) {
    if ((a <= 20 && a >= 10) || (b <= 20 && b >= 10)) {
        return true;
    }
    return false;
}

/* hasTeen - We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen. */
function hasTeen(a, b, c) {
    let arr = [a, b, c];
//     arr.forEach(num => {
//         if (num >= 13 && num <= 19) {
//             console.log(num);
//             console.log('found one');
//             return true;
//         } else {
//             return false;
//         }
//     });
    let result = arr.filter(num => (num <= 19 && num >= 13));
    if (result.length) {
        return true;
    } return false;
}
// Still working on realizing which method is most effective for the issue at hand. Tried a for-loop here, then forEach, then filter

/* loneTeen - We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both. */
function loneTeen(a, b) {
    if (((a >= 13 && a <= 19) && (b < 13 || b > 19)) || ((b >= 13 && b <= 19) && (a < 13 || a > 19))) {
        return true;
    } return false;
}
// Parens were causing test fails here

/* delDel - Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged. */
function delDel(str) {
    let newStr = '';
    if (str.startsWith('del', 1)) {
        console.log('del detected');
        newStr = `${str.slice(0, 1)}${str.slice(4, str.length)}`;
        return newStr;
    } return str;
}
// Slice is (inclusive, non-inclusive). Tried slice(4, str.length - 1) first, which cuts off the last character

/* mixStart - Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count. */
function mixStart(str) {
    // const re = /[a-zA-Z/i;
    if (str.startsWith(re)) {
        return true;
    }
}
// Still don't get regex. Can't use a regex with startsWith(), apparently. Maybe use match()? 