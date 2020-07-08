function factorial(n){
  let i =n-1;
  
  while(true){
    
    n += n * (i-1);
   
    if(i == 1)
    break;
    
    i--;
    
  }
  
  console.log(n);
  
}
