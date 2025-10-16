function isSameType(value1, value2) {
    // Both values are NaN
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }

    // One is NaN, the other is not
    if (Number.isNaN(value1) || Number.isNaN(value2)) {
        return false;
    }

    // Same type
    return typeof value1 === typeof value2;
}

// Example test cases

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
