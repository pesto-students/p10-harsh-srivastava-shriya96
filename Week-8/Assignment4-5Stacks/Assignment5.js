function NextGreatestNumber(size, arr){
    
    let s = []
    let output = []

    s.push(arr[0])
    for (let i=1; i < size; i++){


        if (isEmpty(s)){
            s.push(arr[i])
        }

        while(isEmpty(s) == false && peek(s) < arr[i]){
            output[arr.indexOf(peek(s))]=arr[i]
            s.pop()

        }
        s.push(arr[i]) 
        console.log("iteration " + i + "S " + s )       
    }
    console.log("f" + s)
    while(!isEmpty(s)){

        let val=peek(s)
        console.log(val + "s" + s)
        output[arr.indexOf(val)]= -1
        s.pop()

    
    }
    return output
}

function isEmpty(arr){
    return arr.length == 0
}

function peek(arr){
    return arr[arr.length-1]
}

let arr=[1,3,2,4]
let n= 4

console.log(NextGreatestNumber(n,arr))

