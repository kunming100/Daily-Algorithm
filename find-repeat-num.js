/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  // 第一种：运行时间较长，内存占用少一点
  const arr = []
  for (let i = 0; i < nums.length; i += 1) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i])
    } else {
      return nums[i]
    }
  }

  // 第二种：运行时间较短，内存占用多一点
  // const arr = new Set()
  // let result
  // for (let i = 0; i < nums.length; i += 1) {
  //   let prevSize = arr.size
  //   arr.add(nums[i])
  //   if (prevSize === arr.size) {
  //     return nums[i]
  //   }
  // }
};

console.log(findRepeatNumber([1,4,6,3,4]))