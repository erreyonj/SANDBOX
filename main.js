// function neutralise(s1,s2) {
//    const joy = s1.split('').map((op,i)=>{
//         return op === s2[i] ? op : '0'          
//     }).join('')

//     return joy;
// }


// console.log(neutralise('+-+','+--'))

// maxChar('abcccccd') === 'c'
// maxChar('03211141') === '1'


// ****** ******* ********** //
// ******************* CHUNK *********** //
// ****** ******* ********** //

// function chunk(arr, size){
//     const chunked = []
//     while(arr.length){
//         let item = []
//         for(let i=0; i<size && arr.length >0; i++){
//             item.push(arr.shift())
//         }
//         chunked.push(item)
//     }
//     return chunked
// }

// console.log(chunk([1,2,3,4,5,6,7,8],3));


// ****** ******* ********** //
// ************** RUNNING SUM ****************** //
// ****** ******* ********** //


// var runningSum = function(nums) {
//     let index = 0
//     let counter = 1
//     let result = []
 
//     for(let i=0; i<nums.length; i++){
//         let add = nums.slice(index,counter)
//         let added = add.reduce((acc,c)=>acc+c)
//         result.push(added)
//         counter++ 
//     }
//     return result
//  };


// console.log(runningSum([1,2,3,4]));


// ****** ******* ********** //
// ******************* MAX WEALTH ***************** //
// ****** ******* ********** //

// var maximumWealth = function(accounts) {
//     let set = accounts.map((acc)=> acc.reduce((acc,c)=>acc+c) )
//     return Math.max(...set)
// };

// console.log(maximumWealth([[1,2,3],[3,2,1]]));



// ****** ******* ********** //
// ****************** TOP K FREQUENT ********* //
// ****** ******* ********** //

// var topKFrequent = function(nums, k) {
    // let result = []
    // need to traverse array and store how often each element appears, need a map
    // let valMap = {}
    // for(let el of nums){
    //     valMap[el] ? valMap[el] += 1 : valMap[el] = 1
    // }


    // return result.slice(0,k)



    //  //  //  //  //
    // var topKFrequent = function(nums, k) {
    // const map = new Map();
    
    // for(let i=0; i < nums.length;i++){

            // V sets keys and values of Map same as valMap
    //     map.set(nums[i], 1 + (map.get(nums[i]) || 0));
    // }
    
    
            // V    make an arr from the keys
            // sort said arr in decending order using get methods, 
            // think sort((a,b)=> b-a)
            // then slice first two as I was about to do
    // return Array.from(map.keys()).sort((key1,key2) => map.get(key2) - map.get(key1)).slice(0, k);
//};

// console.log(topKFrequent([2,6,6,6,6,6,7,4,4,8,9,9,9],2));



// ****** ******* ********** //
// ************** CONTAINS DUP ****************** //
// ****** ******* ********** //

// var containsDuplicate = function(nums) {
//     const tracker = new Map()
//     for(let i=0; i<nums.length; i++){
//         tracker.set(nums[i], 1 + (tracker.get(nums[i]) || 0))
//     }
    
//     let answer = false
//     for(let [key,value] of tracker){
//         if(value>1){
//             answer = true
//             break
//         }
//     }
//     return answer
// };

// console.log(containsDuplicate([2,3,1]));





// ****** ******* ********** //
// *********** IS ANAGRAM ************* //
// ****** ******* ********** //


// var isAnagram = function(s, t) {
//     let newS = s.split('').sort()
//     let newT = t.split('').sort()

//     console.log(newS , newT)
//     return newT === newS
//   };

//   console.log(isAnagram('anagram','nagrama'));



// ****** ******* ********** //
// ************ CHALK REPLACER ****************** //
// ****** ******* ********** //

// currently too slow



// let chalkReplacer = function(chalk,k){
//     // i will need to repeatedly traverse my arr, subtracting arr[i] value from k until k = 0
//     // every time an iteration happens i need to hold onto the index of which student went last / which 
//     // student is next

//     // to avoid using additional for loop

//     //hold onto current index
//     let current = 0
//     // current = 1
//     // 2
//     // 0
//     // 1
//     // 2
    
//     // does something until next student chalk req is less than k(using 0 as a placeholder)
//     while(k>0){

//         //decrement k
//         k -= chalk[current]
//         // k == 17
//         // k == 16
//         // k == 11
//         // k == 6
//         // k == 5
//         // k == 0 ....happens inside while loop

//         // check k against next value in chalk, with a check to make sure we are not at end of arr
//         if(chalk[current+1] == undefined){
//             if(k < chalk[0]){
//                 return 0
//             }
//             // 11 > 5, continue
//         }
//         if(k < chalk[current+1]){
//             return current+1
//         }
//         // 17 > 1, continue
//         // 16 > 5, continue
//         // continue
//         // 6 > 1, continue
//         // 5 = 5, continue 


//         //update current here, restarting if at last index or incrementing if not
//         current + 1 >= chalk.length ? current = 0 : current++
//         // 0 + 1 < 3, increment and continue
//         // 1 + 1 < 3, continue
//         // 2 + 1 = 3, current = 0, continue
//         // 0 + 1 < 3, continue
//         // 1 + 1 < 3, continue 
        
//     }

//     //  will likely be updated
//     return current 
// }
  

// console.log(chalkReplacer([2,2,3],1));

// ****** ******* ********** //
// ****** TWO SUM ********** //
// ****** ******* ********** //

// let twoSum = function(nums, target) {

//     let counter = 0
//     while(counter<nums.length){
//         let current = nums[counter]
//         for(let i=0; i<nums.length; i++){
//             if(current + nums[i] === target && nums.indexOf(current) !== i){
//                 return [counter,i]
//             }
//             console.log(current,counter)
//         }
//         counter++
//     }
//  }


//  console.log(twoSum([3,2,4],6));





// ****** ******* ********** //
// ****** BinarySearchTree PRACTICE ********** //
// ****** ******* ********** //

// class Node {
//     constructor(value){
//         this.left = null
//         this.right = null
//         this.value =  value
//     }

//     insert(root,value){
//         if(root === null){
//             root = new Node(value)
//         } else {
//             if(root.value < value){
//                root.right = this.insert(root.right, value) 
//             } else {
//                 root.left = this.insert(root.left, value)
//             }
//         }

//         return root
//     }
// }




// function isValidBST(root){

//     function validate(node,min,max){
//         if(node === null){
//             return true
//         } 

//         // if there was something to the left(min) or somehting to the right(max) of a root, then we need to validate those nodes, if there is nothing then we will return true
//         if(min !== null && node.value <= min || max !== null && node.value >= max){
//             return false
//         } 
//         // left validate checks that node values to the right of the root are less than root value(node.value below becomes the max in the recursive call and node.left.value will become node.value in recursive call) A valid BST has right values lower than the previous.
//         //
//         return validate(node.left, min, node.value) && validate(node.right, node.value, max)
//     }

//     return validate(root,null,null)
// }



// class Tree {
//     constructor(value){
//         this.left = null
//         this.right = null
//         this.value = value
//     }

//     insert(root,value){
//         if(root === null){
//             root = new Tree(value)
//         } else {
//             if(root.value < value){
//                 root.right = this.insert(root.right,value)
//             } else {
//                 root.left = this.insert(root.left, value)
//             }
//         }

//         return root
//     }
// }

// const anotherTree = new Tree(5)
// anotherTree.right = new Tree(1)
// console.log(anotherTree)
// console.log(isValidBST(anotherTree))

// function validBST3(root){
//     function validate(node, min, max){
//         if(node === null){
//             return true
//         }

//         if(min !== null && node.value <= min || max !== null && node.value >= max){
//             return false
//         }

//         return validate(node.left, min, node.value) && validate(node.right, node.value, max)
//     }

//     return validate(root, null, null)
// }

// console.log(validBST3(anotherTree))


// ****** ******* ********** //
// ****** Heaps PRACTICE ********** //
// ****** ******* ********** //

class MyMaxHeap {
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()

    }

    heapifyUp(){
        // last i in heap
        const index = this.heap.length - 1

        // until we're at the root...
        while(index > 0){

            // standard heap calc
            let parentIdx = Math.floor((index - 1)/2)
            // parent index being the largest means it is the root and are done.. break
            if(this.heap[parentIdx] > this.heap[index]){
                break
            }
            //otherwise, swap the value at i with its parent. In effect pushing it up the tree. Each new loop considers the new parent
            [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]]
        }
    }

    extractMax(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()

        // puts root into max, but still need to adjust heap
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)

        return max

    }

    heapifyDown(index){
    }
}



// ****** ******* ********** //

let intArr1 = [3,2,5,10]
let intArr2 = [4,7,8,9]

let cubeOverSqr = (arr1, arr2) =>{
    let sqrSum = arr1.reduce((a,b)=>a+ b**2,0)
    let cubSum = arr2.reduce((a,b)=>a+ b**3,0) 

    console.log(sqrSum > cubSum)
}

// cubeOverSqr(intArr1,intArr2)


function areMultiples(arr){
    console.log(arr.filter((num,i)=> num%i === 0))
}

// areMultiples([22,-6,32,82,9,25])

function groupAna(strs){
    let map = {}
    for(let el of strs){
        let sort = el.split('').sort().join('')
        map[sort] ? map[sort].push(el) : map[sort] = [el]
    }
    console.log(Object.keys(map))
}

groupAna(['eat', 'tea', 'tan'])

