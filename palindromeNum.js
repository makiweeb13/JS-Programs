var isPalindrome = function(x) {
    var reversed = x.toString().split('').reverse().join('')
    return Number(reversed) === x ? true : false
}

console.log(isPalindrome(121));