//Stack using linkedlist
function stackUsingLL(){ 
    let Node = function(elm){
      this.element = elm;
      this.next = null;
    }
    
     
    let length = 0;
    
    
    let head = null;
    
   
    this.push = function(elm){
      
      let node = new Node(elm),
      current;
      
     
      current = head;
      node.next = current;
      head = node;
      
      length++;
    }
    
    
    this.pop = function(){
      let current = head;
      
    
      if(current){
        let elm = current.element;
        current = current.next;
        head = current;
        length--;
        return elm;
      }
      
      return null;   
    }
    this.peek = function(){    
      if(head){    
        return head.element;
      }
  
      return null;
    }
    this.toArray = function(){
      let arr = [];
      let current = head;
      while(current){
        arr.push(current.element);
        current = current.next;
      }
      
      return arr;
    }
    this.isEmpty = function(){
      return length === 0;
    }
    
    //Return the size of the stack
    this.size = function(){
      return length;
    }

    this.clear = function(){
      head = null;
      length = 0;
    }
    
  }
  let stack = new stackUsingLL();   //creating new instance of Stack
 stack.push(1);
 stack.push(2);
 stack.push(3);
 console.log(stack.peek());
 console.log(stack.isEmpty());
 console.log(stack.size());
 console.log(stack.pop());
 console.log(stack.toArray());
 console.log(stack.size());
 stack.clear();  //clear the stack
 console.log(stack.isEmpty());