const checkBalance = (string) => {

    let pile = [];
    let symboles = {
     '}': '{',
     ']': '[',
     ')': '('
    }
    const openings = new Set(['{', '[', '(']); 
    
    for (let char of string) {
    
        if(openings.has(char)) {
            pile.push(char);
        }else if(char in symboles){

            if(pile.length === 0 || pile.pop() !== symboles[char]) {
                return false;
            }
        }
    }

    return pile.length === 0;

}

export default checkBalance;


