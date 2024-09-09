// input        // result
// [1,4,6,7]       // [14,12,8,2]
// [7,4,2,1]       // [2,4,8,14]
// [5]             // [10]
// [1,3]			//[6,2]

let arrInput = [1,4,6,7]



let arrayInputNew = arrInput.map(item =>{
    return item * 2
})

console.log(arrayInputNew.reverse())

