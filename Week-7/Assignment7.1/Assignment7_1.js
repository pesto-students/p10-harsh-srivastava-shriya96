function maxSum(arr){
  max=arr[0]
  totalSum=0
  for (let i=0;i<arr.length;i++){
    totalSum+=arr[i]
    if(totalSum>max){
      max=totalSum
    }
    if(totalSum<0){
      totalSum=0
    }
  }
  return max
}

console.log(maxSum([1, 2, 3, 4, -10]))
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))