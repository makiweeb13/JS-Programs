var isValid = function(s) {
    
    let brackets = []
    let sameBracket = { '(': ')', '[': ']', '{': '}'}
   
    for (let i = 0; i < s.length; i++) {
        
        if (/\(|\[|\{/.test(s[i])) {
            brackets.push(s[i])
        }   else {
            sameBracket[brackets[brackets.length - 1]] == s[i] ? brackets.pop() : brackets.push(s[i])
        }
    }
    
    return brackets.length > 0 ? false : true
}