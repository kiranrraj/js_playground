let checkPalindrome = (str) => {

    const length = str.length;
    for( let i = 0; i < length / 2; i++ ) {
        if ( str[i] !== str[length - 1 - i] ) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

module.exports = checkPalindrome;