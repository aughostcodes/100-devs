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