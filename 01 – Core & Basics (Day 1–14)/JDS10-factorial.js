let value = 1;
function factorial(n) {
    value = value * (factorial(n - 1))
    return value
}

factorial(5)