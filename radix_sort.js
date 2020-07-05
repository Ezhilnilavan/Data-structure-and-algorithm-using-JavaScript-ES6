radixSort(){
    
    let arr = [12,3,12,4,1,53,22,12,64,2,4,1,5,111,234,23,200];
    
    let getLength =(arr)=>{
        let len = arr.map((v,i)=>{
            return String(v).length;   
        });
        return Math.max(...len);
    };

    let numLength = getLength(arr);
    for(let i=0;i < numLength;i++){
        let backet = Array.from({length: 10}).map(()=>[]);
        arr.map((v,index)=>{
            let backetIndex = getNum(v, i);
            let t = [...String(v)];
            if(t[i] === undefined){
                backet[0].push(v);
            }else{
                backet[t[i]].push(v);
            }
            
               
        });
        arr = backet.flat();
    }

    return arr.join("->");
    

    }
