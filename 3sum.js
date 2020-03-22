// Problem 15

//  Given an array nums of n integers, are there elements a, b, c in nums 
// such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

const threeSum = (nums) => {
    nums.sort((a,b) => a-b);
    let results = [];
    for(let i = 0; i < nums.length-2; i++){
        let current = nums[i];
        let left = i+1;
        let right = nums.length-1;
        while(left < right){
            let sum = current + nums[left] + nums[right];
            if(sum > 0){
                right -= 1
            } else if (sum < 0){
                left += 1
            } else {
                results.push([current, nums[left], nums[right]])
                right--;
                left++;
            }
        }
    }
    return results
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// [0, 0, 0, 0, 0, 0 ,0 ,0 , 0, 0 ,0 , 0, 0 ,0 , 0, 0 ,0 , 0, 0, 0 ,0 , 0......]

// A solution set is:
// [
//     [-1, 0, 1], 
//     [-1, -1, 2]
// ]


var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let results = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let current = nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = current + nums[left] + nums[right];
            if (sum > 0) {
                currentRight = right;
                while (nums[currentRight] === nums[right] && left < right) {
                    right--;
                }

            } else if (sum < 0) {
                currentLeft = left;
                while (nums[currentLeft] === nums[left] && left < right) {
                    left++;
                }
            } else {
                results.push([current, nums[left], nums[right]])
                currentRight = right;
                while (nums[currentRight] === nums[right] && left < right) {
                    right--;
                }

                currentLeft = left;
                while (nums[currentLeft] === nums[left] && left < right) {
                    left++;
                }
            }
        }
    }
    
    let set = new Set(results.map(JSON.stringify));
    let arr2 = Array.from(set).map(JSON.parse);

    return arr2

};


var threeSum = function (nums) {
    let arr = nums.sort((a, b) => a - b)
    let output = {};
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1
        let right = arr.length - 1
        while (left < right) {
            if (arr[i] + arr[left] + arr[right] === 0) {
                output[[arr[i], arr[left], arr[right]]] = [arr[i], arr[left], arr[right]];
            }

            if (arr[i] + arr[left] + arr[right] < 0) {
                let currLeft = left;
                while (arr[left] === arr[currLeft] && left < right) {
                    left += 1;
                }
            } else {
                let currRight = right;
                while (arr[right] === arr[currRight] && left < right) {
                    right -= 1;
                }
            }
        }
    }
    return Object.values(output)
};