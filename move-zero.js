/**
 * 将数组中的 0 移动到末尾
 * @param {Array} nums 
 */
function moveZero(nums) {
  let len = nums.length;
  let j = 0;
  // i 快指针遍历，j记录非零，当i索引不为0，更新j值
  for (let i = 0; i < len; i += 1) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      // 判断i索引是否等于当前j，不等则赋值0，交替更新
      if (i !== j) {
        nums[i] = 0;
      } 
      j += 1;
    }
  }
  return nums;
}

console.log(moveZero([3, 0, 4, 1, 0, 2, 0]));
