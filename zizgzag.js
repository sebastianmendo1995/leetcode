// Problem 6

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
//  (you may want to display this pattern in a fixed font for better legibility)

var convert = function (s, numRows) {
    if (numRows === 1) return s
    const arr = [];
    for (let i = 0; i < numRows; i++) {
        arr.push([]);
    }
    let row = 0;
    let counter = 1;

    for (let letter of s) {
        arr[row].push(letter)
        row += counter
        if (row === numRows - 1) {
            counter = -1;
        } else if (row === 0) {
            counter = 1;
        }
    }

    return arr.reduce((acc, val) => acc.concat(val), []).join('');

};