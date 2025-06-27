
function isPalindrome(str) {
    let rev = str.toLowerCase();
    return rev === rev.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); // true