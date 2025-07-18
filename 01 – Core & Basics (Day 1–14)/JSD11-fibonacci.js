function fibonacci(n) {
    let value = [0, 1];
    while (value[value.length - 1] <= n) {
        let sum = value[value.length - 1] + value[value.length - 2]
        value.push(sum)
    }
    return value;
}

console.log(fibonacci(20))