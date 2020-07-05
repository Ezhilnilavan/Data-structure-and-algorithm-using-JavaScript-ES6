function Node(data){
  this.value = data;
  this.next = null;
}

class LList{
  constructor(){
    this.head = new Node("head");
  }
  
  findNode(item){
    let current = this.head;
    while(current.next !== null && current.next !== item){
      current = current.next
    }
    return current;
  }
  
  
  findPrevious(item){
    let current = this.head;
    while(current.next !== null && current.next.value !== item){
      current = current.next;
    }
    return current;
    
  }
  
  insert(after, item){
    let newNode = new Node(item);
    let current = this.head;
    if(typeof after !== "undefined"){
      current = this.findNode(after.value);
    }
  
    newNode.next = current.next;
    current.next = newNode;
  }
  
  remove(item){
    let current = this.findPrevious(item);
    current.next = current.next.next;
  }
  
  display(){
    let current = this.head;
    let str = [];
    let i=0;
    while(current.next !== null){
      str[i++] = current.next.value;
      current = current.next;
    }
    
    return str.join("=>");
  }
  
}


let ExpressTrain = new LList();

ExpressTrain.insert("head", "Box1");
ExpressTrain.insert("Box1", "Box2");
ExpressTrain.insert("Box2", "Box3");
ExpressTrain.insert("Box3", "Box4");

ExpressTrain.remove("Box3");

console.info(ExpressTrain.display())
