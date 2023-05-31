a=[5, 10, 3, 2, 50, 80]
B=78

function newf(arr,n){
  diff=0
  for(let i=0;i<arr.length;i++){
    for (let j=1;j<arr.length;j++){
        diff=Math.abs( arr[i]-arr[j])
        
        if (diff === n){
          return 1
        }
    }
  }
  return 0
}


console.log(newf(a,B))
