function Node(item){
  this.value = item;
  this.next = null;
  this.previous = null;
}


class DLList{
  
  constructor(){
    this.head = new Node("Head");
  }
  
  findNode(item){
    let current = this.head;
    while(current.value !== item){
      current = current.next;
    }
    return current;
  }
  
  insertNode(before, item){
    let newNode = new Node(item);
    let nodeBefore = this.findNode(before);
    newNode.next = nodeBefore.next;
    newNode.previous = nodeBefore
    nodeBefore.next = newNode;
  }
  
  
  
  deleteNode(item){
      let deleteNode = this.findNode(item);
       if (!(deleteNode.next == null)) {
            deleteNode.previous.next = deleteNode.next;
            deleteNode.next.previous = deleteNode.previous;
            deleteNode.next = null;
            deleteNode.previous = null;
       }
  }
  
  displayList(){
    
    let current = this.head;
    let str = [];
    let i=0;
    while(!(current.next == null)){
      str[i]=  current.value;
      current = current.next;
      i++;
    }
    
    return str.join("<=>")
    
  }
  
  
  findLast(){
    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    return current;
  }
  
  printReverse(){
    let current = this.findLast();
    let i = 0;
    let str = [];
    while(current.previous !== null){
      str[i++] = current.previous.next.value; 
      current = current.previous;
    }
    return str.join("<=>");
  }
  
  
  
}

let Dl = new DLList();
Dl.insertNode("Head", "Ezhil")
Dl.insertNode("Ezhil", "Mithran")
Dl.insertNode("Mithran", "Sashtika")

Dl.deleteNode("Mithran")

console.info(Dl.printReverse())

