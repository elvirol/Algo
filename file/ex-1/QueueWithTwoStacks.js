class QueueWithTwoStacks {

    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    enqueue(value) {
       return this.inStack.push(value);
    }

    dequeue(){
        if (this.inStack.length === 0 && this.outStack.length === 0) {
            return null;  
        }

        if(this.outStack.length === 0) {
            while(this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }

    peek() {
        if(this.outStack.length === 0) {
            while(this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop())
            } 
        }
        return this.outStack[this.outStack.length-1];
    }

    isEmpty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    } 
 }
 export default QueueWithTwoStacks;
