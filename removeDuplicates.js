var removeDuplicates = function(nums) {
    let checker = nums[0]
    let k = 1
    for (let i = 0; i < nums.length; i++) {
        if (checker < nums[i]) {
            checker = nums[i]
            nums[k] = checker
            k++
        } 
    }
    return k
}