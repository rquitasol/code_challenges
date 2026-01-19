/**
 * @param {number[]} nums
 */
var ArrayWrapper = function (nums) {
  if (nums <= 0 && nums >= 100) {
    return "Error!";
  }
  // console.log(nums);
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function (nums) {
  return this.nums.reduce((acc, num) => acc + num, 0);
};

ArrayWrapper.prototype.toString = function () {
  console.log(this.nums);
  return `[${this.nums.join(",")}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
obj1 + obj2; // 10

String(obj1); // "[1,2]"
String(obj2); // "[3,4]"

const obj3 = new ArrayWrapper([2, 3, 5]).toString();
