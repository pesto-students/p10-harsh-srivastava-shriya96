class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}
export class Stack{
    constructor(){
        this.top=null;
        this.size=0;
    }

    push(value){
        let node = new Node(value)
        if(this.top){
            node.next= this.top
        }
        this.top=node
        this.size++

    }

    pop(){
        if (this.isEmpty()){
            return "Underflow"
        }
        let value
        if(this.top){
            value= this.top.value
            this.top=this.top.next
            this.size--
        }
        return value
    }

    isEmpty(){
        return this.top == null
    }

    peek(){
        if (this.isEmpty()){
            
            return "Underflow"
        }
        return this.top.value
    }
    getSize(){

        return this.size 
   }

}


