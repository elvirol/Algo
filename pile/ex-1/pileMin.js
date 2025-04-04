class PileMin  {

    constructor() {

        this.pile = [];
        this.minPile = [];
    }
    
    isEmpty() {
        return this.pile.length === 0;
    }

    top(){
       return this.pile[this.pile.length-1];
    }

    push(element) {

        this.pile.push(element);
      
        if(element < this.minPile[this.minPile.length-1] || this.minPile.length===0) {
            this.minPile.push(element)
        }
        
    }

    pop(){

        if (this.isEmpty()) {
            return null;  
        }

        if(this.top() === this.minPile[this.minPile.length-1]){
            this.minPile.pop();
        }
        this.pile.pop();
    }

    min() {
        return this.minPile[this.minPile.length-1] ;
    }
}

export default PileMin;