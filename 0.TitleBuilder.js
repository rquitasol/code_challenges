function strBuilder(str) {
  const beforeSpace = "";
  const strArr = str.split(" ");

  return strArr.reduce(capitalizeFirstLetter);
}

function capitalizeFirstLetter(acc, val) {
  return acc + val[0].toUpperCase() + val.slice(1, val.length);
}

// console.log("14." + strBuilder("Multiply all object values by x") + ".js");

const nums1 = [1, 2, 3];
const nums2 = [0];

var subsets = function (nums) {
  let subsets = [[]];
  for (const e of nums) {
    const lastSubset = subsets.length - 1;
    console.log(subsets.length);
    for (let i = 0; i <= lastSubset; i++) {
      subsets.push([...subsets[i], e]);
    }
  }
  console.log(subsets);
  return subsets;
};

subsets(nums1);
subsets(nums2);
