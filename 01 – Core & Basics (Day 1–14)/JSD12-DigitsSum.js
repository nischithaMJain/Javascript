function digitSum(num) {
    let sum = 0;
    let arr = num.toString().split('')
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i])
    }
    return sum;
}

console.log(digitSum(1234))