function isPalindrome(str) {
    if (typeof str !== "string") return "Not a string!"
    str = str.toLowerCase();
    let test = str.replace(/[^a-zA-Z]/g, '');
    let first = 0;
    let last = test.length - 1;
    console.log(test, "test")
    while (first < last) {
        console.log(test[first], test[last])
        if (test[first] === test[last]) {
            first++;
            last--;
        }
        else {
            return "Not a Palindrome"
        }
    }
    return true
}

const result = isPalindrome("Mad$am");
console.log(result);