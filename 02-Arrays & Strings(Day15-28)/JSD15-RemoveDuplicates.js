function removeDuplicares(arr) {
    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
            i++;
        } else {
            i++
        }
    }
    return newArr
}

const result = removeDuplicares([5, 1, 2, 3, 2, 1, 4, 4, 2])
console.log(result)