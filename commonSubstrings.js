
// TEST 2 PROBLEM

// Two Strings

function commonSubstring(a, b) {
    // Write your code here
    let arrA = [];
    let i = 0;
    for (let word of a) {
        arrA.push({});
        let j = 0
        for (let letter of word) {
            if (arrA[i][letter] === undefined) {
                arrA[i][letter] = [j]
            } else {
                arrA[i][letter].push(j)
            }
            j++;
        }
        i++;
    }

    i = 0;

    for (let word of b) {
        let common = []
        for (let letter of word) {
            if (arrA[i][letter] !== undefined) {
                common.push(arrA[i][letter])
            }
        }
        if (common.length >= 1) {
            console.log('YES')
        } else {
            console.log('NO')
        }
        i++;
    }


}