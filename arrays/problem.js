// Question 1: Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they
// add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same
// element twice.
// You can return the answer in any order.

// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// Approach:
// Initialize a hash map to store numbers and their indices
// Iterate through the array
// Calculate the difference needed to reach the target
// Check if the difference exists in the map
// If it exists, return the indices of the current number and the difference
// If it doesn't exist, add the current number and its index to the map


function twoSum(nums, target) {
    
    // Initialize a hash map to store numbers and their indices
    const map = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {

        // Calculate the difference needed to reach the target
        const difference = target - nums[i];

        // Check if the difference exists in the map
        if (map.has(difference)) {

            // If it exists, return the indices of the current number and the difference
            return [map.get(difference), i];
        }

        // If it doesn't exist, add the current number and its index to the map
        map.set(nums[i], i);
    }

    // If no solution is found 
    return [];
}


const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); 


// Question 4: Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the
// answer in any order.

// Example:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]


// Approach:

// Use a hash map to count the frequency of each element in the array.
// Use a list of lists (or buckets) to group elements by their frequencies.
// Iterate over the frequency map to populate the buckets.
// Iterate over the buckets from the highest frequency to the lowest to collect the top k frequent elements.

function topKFrequent(nums, k) {
    // Step 1: Count the frequency of each element
    const freqMap = {};
    for (let num of nums) {
        if (freqMap[num] === undefined) {
            freqMap[num] = 1;
        } else {
            freqMap[num]++;
        }
    }

    // Step 2: Create buckets where index represents frequency
    const buckets = Array(nums.length + 1).fill(null).map(() => []);
    for (let [num, freq] of Object.entries(freqMap)) {
        buckets[freq].push(Number(num));
    }

    // Step 3: Gather the top k frequent elements
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i] !== null) {
            result.push(...buckets[i]);
        }
    }

    // Ensure we only return k elements (if there are more than needed)
    return result.slice(0, k);
}

// Example usage:
const Nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(Nums, k)); // Output: [1, 2]
