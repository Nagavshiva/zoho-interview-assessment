// Question 2: Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


// Approach:

// Use a hash map (dictionary) to group anagrams together.
// For each word in the input array, sort the characters of the word to form a key.
// Use this sorted key to group words in the hash map.
// If the key already exists in the hash map, append the word to the list of anagrams.
// If the key does not exist, create a new entry in the hash map with the sorted key and the word.
// Finally, return the values of the hash map as the groups of anagrams.


function groupAnagrams(strs) {
    // Initialize a hash map to store the grouped anagrams
    const anagramsMap = new Map();

    // Iterate through each string in the input array
    for (let str of strs) {
        // Sort the characters of the string to form the key
        const sortedKey = str.split('').sort().join('');

        // Check if the key already exists in the map
        if (anagramsMap.has(sortedKey)) {
            // If it exists, append the string to the list
            anagramsMap.get(sortedKey).push(str);
        } else {
            // If it doesn't exist, create a new entry with the key and the string
            anagramsMap.set(sortedKey, [str]);
        }
    }

    // Return the values of the hash map as the result
    return Array.from(anagramsMap.values());
}

// Example usage:
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));




// Question 3: Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


// Approach:

// Use the sliding window technique with two pointers to keep track of the current substring without repeating characters.
// Use a hash map  to store the characters and their most recent indices.
// Move the right pointer to expand the window and check if the character is already in the hash map.
// If the character is in the hash map and its index is within the current window, move the left pointer to the right of the previous occurrence of the character.
// Update the hash map with the current character and its index.
// Calculate the length of the current window and update the maximum length if the current window is longer.
// Continue until the right pointer reaches the end of the string.


function lengthOfLongestSubstring(s) {
    // Initialize a hash map to store characters and their indices
    const charIndexMap = new Map();
    // Initialize two pointers and the maxLength variable
    let left = 0;
    let maxLength = 0;

    // Iterate over the string with the right pointer
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If the character is in the map and its index is within the current window
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= left) {
            // Move the left pointer to the right of the previous occurrence of the character
            left = charIndexMap.get(currentChar) + 1;
        }

        // Update the map with the current character and its index
        charIndexMap.set(currentChar, right);

        // Calculate the length of the current window and update maxLength if necessary
        maxLength = Math.max(maxLength, right - left + 1);
    }

    // Return the maximum length of the substring without repeating characters
    return maxLength;
}


const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); 



// Question 5: Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false



function isAnagram(s, t) {
    // If lengths of strings are not equal, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // Create an object to count the occurrences of each character in the first string
    const count = {};

    // Count characters in the first string
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Subtract the count for characters in the second string
    for (let char of t) {
        if (!count[char]) {
            return false; // If a character is not in the count or count goes negative, it's not an anagram
        }
        count[char] -= 1;
    }

    // If all counts are zero, then it's an anagram
    return true;
}


console.log(isAnagram("anagram", "nagaram")); 
console.log(isAnagram("rat", "car"));         



