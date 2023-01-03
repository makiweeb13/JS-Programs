var areAlmostEqual = function(s1, s2) {
    let copy, temp; 
    if (s1.length == s2.length) {
        for (let i = 0; i < s1.length; i++) {
            for (let j = 0; j < s1.length; j++) {
                copy = s1.split('');
                temp = s1[i];
                copy[i] = copy[j];
                copy[j] = temp;
                if (copy.join('') === s2) return true;
            }
        }
    } return false;
};