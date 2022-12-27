var longestCommonPrefix = function(strs) {
    let longestPrefix = strs[0][0]
    let str = strs[0]
    let arr = []
    let i = 1
    
    while (strs.map(str => str.substr(0, i)).every(str => str == longestPrefix)) {
        longestPrefix += str[i]
        i++
    }

     return strs[0].substr(0, i - 1)
}