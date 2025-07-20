
function sortManually(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        if (n2 > n3) {
            return [n1, n2, n3]
        } else {
            return [n1, n3, n2]
        }
    } else if (n2 > n3 && n2 > n1) {
        if (n1 > n3) {
            return [n2, n1, n3]
        } else {
            return [n2, n3, n1]
        }
    } else if (n3 > n2 && n3 > n1) {
        if (n1 > n2) {
            return [n3, n1, n2]
        } else {
            return [n3, n2, n1]
        }
    } else {
        return [n1, n2, n3]
    }
}

const result = sortManually(1, 3, 1)
console.log(result)