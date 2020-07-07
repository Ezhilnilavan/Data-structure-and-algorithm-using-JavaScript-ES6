class masterSet{
  
  constructor(){
    this.dataSource =[];
  }
  
  add(data){
    
    let isAdded = false;
    [...data].forEach((v,i )=>{
      if((this.dataSource).indexOf(v) < 0 ){
        this.dataSource.push(v);
        isAdded = true;
      }  
    });
    
    return isAdded
    
     }
  
  
  isContain(data){
    
    return Boolean((this.dataSource).indexOf(data) > -1)
  }
  
  display(){
    console.log(this.dataSource);
  }
  
  unionCheck(Bset){
    
    let tempSet = [];
    tempSet = Bset.dataSource.map((v,i)=>{
      if(!this.isContain(v)){
        this.dataSource.push(v);
      }
    });
    
    this.display();
  }
  
  intersectionCheck(Bset){
    
    let tempSet = [];
    
    return tempSet = Bset.dataSource.filter((v,i)=>{
      
      if(this.isContain(v) && v){
        return v ;
      }
      
    });
    
    
  }
  
  differenceCheck(Bset){
    
    let tempSet = [];
    
    return tempSet = this.dataSource.filter((v,i)=>{
      
      if(!Bset.isContain(v)){
        return v;
      }
      
    });
    
    return tempSet;
    
  }
  
}

let SetA = new masterSet();

let SetB = new masterSet();


SetA.add([1,3,4,5,6,7,9]);
SetB.add([2,4,6,8,10]);

console.log(SetB.intersectionCheck(SetA));

console.log(SetB.differenceCheck(SetA));




