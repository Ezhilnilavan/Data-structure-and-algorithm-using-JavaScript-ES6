

let arr =[3,5,12,3,6,78,4,9,10,44,66,22];

quicksort(arr,0, arr.length-1);

function quicksort(arr){
  
  let pivot = arr[0];
  let left=[], right = [];
  
  if(arr.length == 0)
    return [];
  
  for(let i=1;i<arr.length;i++){
    
      if(arr[i] < pivot){
        
        left.push(arr[i])
      }else{
        
        right.push(arr[i])
      }
    
  }
  
  return quicksort(left).concat(pivot, quicksort(right));
  
}

console.info(quicksort(arr))
