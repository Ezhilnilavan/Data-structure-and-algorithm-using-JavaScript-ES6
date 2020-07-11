function swap(arr, start, end){
  let temp = arr[start]
  arr[start] = arr[end];
  arr[end] = temp;
}

function quicksort(arr, start, end){
    if(start >=  end){
        return;
    }
    let pindex = partition(arr, start, end);
    quicksort(arr, start, pindex - 1);
    quicksort(arr, pindex+1, end);
}

function partition(arr, start, end){
    let pivotIndex = start;
    let pivot = arr[end];
   
    for(let i=start; i<end; i++){
        if(arr[i] < pivot){
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end)
    return pivotIndex;
}

let arr =[3,5,12,3,6,78,4,9,10,44,66,22];

quicksort(arr,0, arr.length-1);

console.info(arr)
