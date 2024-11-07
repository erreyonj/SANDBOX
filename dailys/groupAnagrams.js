// Given an array of strings strs, group the 
// anagrams
//  together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

var groupAnagrams = function(strs) {
    // P: arr of strings
    // R: arr of arrs, groups can be in any order
    // E: 
    // P: will need to traverse arr at least once to sort each el
    //    DS -> hashmap? 
    //    I will traverse arr, sort each el, add to hash where prop is sorted "name" and values are arrs 
    //    containing original els, finally return Object.values

    let map = {}
    for(let el of strs){
        let sort = el.split('').sort().join('')
        map[sort] ? map[sort].push(el) : map[sort] = [el]
    }
    return Object.values(map)
};