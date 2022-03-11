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
    return (21 - n) * 2;
}