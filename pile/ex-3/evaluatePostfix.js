const evaluatePostfix = (expressions) => {

    const stack = [];

    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    for (const token of expressions.split(' ')) {
        if (token in operators) {
            const b = stack.pop();
            const a = stack.pop();
            if (a === undefined || b === undefined) {
                throw new Error(`Token invalide: ${token}`);
            }
            stack.push(operators[token](a, b));
        } else if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            throw new Error(`Token invalide: ${token}`);
        }
    }

    if (stack.length !== 1) {
        throw new Error('Too many values in the stack');
    }

    return stack.pop();
}

export default evaluatePostfix;