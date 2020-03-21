// Problem #5

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Naive Solution

// const longestPalindrome = s => {
//     if (s.length < 2) return s;
//     if (s === s.split('').reverse().join('')) return s;

//     let longestSubString = s.charAt(0);

//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             if (s.slice(i, j + 1) === s.slice(i, j + 1).split('').reverse().join('')) {
//                 if (s.slice(i, j + 1).length > longestSubString.length) {
//                     longestSubString = s.slice(i, j + 1);
//                 }
//             }
//         }
//     }
//     return longestSubString
// }

const longestPalindrome = s => {
    if (s.length < 2) return s
    const expandPalindrome = (startIndex, endIndex) => {
        const slice = s.slice(startIndex, endIndex + 1);

        if (startIndex === 0) return slice;
        if (endIndex === s.length - 1) return slice;

        const beforeChar = s[startIndex - 1];
        const afterChar = s[endIndex + 1];

        if (beforeChar === afterChar)
            return expandPalindrome(startIndex - 1, endIndex + 1);

        return slice
    }

    const palindromes = [];

    for (let i = 0; i < s.length; i++) {
        palindromes.push(expandPalindrome(i, i));

        if (s[i] === s[i + 1]) palindromes.push(expandPalindrome(i, i + 1));
    }

    return palindromes.reduce((max, p) => max.length > p.length ? max : p);
}