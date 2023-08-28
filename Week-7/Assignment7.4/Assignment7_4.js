prices=[7,1,1,1,1]
function WhenToBuyStock(arr){
	min=minVal(prices)[0]
  MinIndex=minVal(prices)[1]

  newArray=prices.slice(MinIndex,prices.length)

  max=maxVal(newArray)[0]

  if (max<=min){
    profit = 0
  }else{
    profit = max-min
  }
	return profit
}

function maxVal(arr){
	max=0
  index=0
  for (i=0;i<arr.length-1;i++){
    if (arr[i]>max){
			max=arr[i]
      index=i
    }
  }
  if (max==arr[0]){
  	return [0,0]
  }
return [max,index]  
}


function minVal(arr){
	min=arr[0]
  index=0
  for (i=0;i<arr.length-1;i++){
    if (arr[i]<min){
			min=arr[i]
      index=i
    }
  }
return [min,index]  
} 