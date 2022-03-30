// These exercises from https://the-winter.github.io/codingjs/

// Warmup-1

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