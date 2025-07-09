function reverseStr(string) {
    if (string.length === 1 || string.length === 0) {
        return string
    } else {
        let str = string.split('')
        let first = 0;
        let last = str.length - 1;
        while (first < last) {
            [str[first], str[last]] = [str[last], str[first]];
            first++;
            last--;
        }
        return str.join("")
    }

}

const result = reverseStr('Nischitha$')
console.log(result);
