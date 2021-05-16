let x = [1,2,[[3,4],5],6,[[6,7]]]

let result = []

function flatThis(x){  
  x.forEach((item, index, arr)=>{
    if(Array.isArray(item)){
      flatThis(item)
    }else{
      result.push(item);
    }
  });  
  return result;
}
