class LinkedList{
  constructor(){
    this.head=null;
    this.size=0
  }
  createNode(nodeValue){
    return {
      value: nodeValue,
      next: null
    }
  }
  isEmpty(){
    return !!this.size
  }
  prepend(value){
    const node = this.createNode(value);
    if(this.isEmpty()){
      this.head = node;
    }else{
      node.next = this.head
      this.head = node;
    }
    this.size++;
  }

  append(value){
    const node = this.createNode(value);
    const curr = this.head;

    while(curr){
      curr = curr.next;
    }
    curr.next = node;
    this.size++;
  }
}
