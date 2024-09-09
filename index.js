// input        // result
// [1,4,6,7]       // [14,12,8,2]
// [7,4,2,1]       // [2,4,8,14]
// [5]             // [10]
// [1,3]			//[6,2]

let arrInput = [1,4,6,7]

arrInput.map(item =>{
    let hasil = item*2
    let hasilArray = []

    hasil.push(hasil)
    console.log(hasilArray)
})

console.log(arrInput.reverse())