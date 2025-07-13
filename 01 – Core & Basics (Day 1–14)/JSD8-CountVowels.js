function countVowels(str) {
    if (typeof str !== "string") return "Not a String!";
    let count = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++;
        }
    }
    if (count === 0) {
        return 'No Vowles found!'
    } else {
        return count;
    }


}

const result = countVowels('Hello World')

console.log(result)