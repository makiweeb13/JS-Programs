var containsDuplicate = function(nums) {
    var uniqueEl = new Set(nums)
    return uniqueEl.size !== nums.length
}