function hasDuplicate(arr){
    let xArr= new Set(arr)
    return xArr.size !== arr.length
}

let array=[1,2,2,3]
console.log(hasDuplicate(array));