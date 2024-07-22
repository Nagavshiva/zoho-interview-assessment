// 1. Evaluate Reverse Polish Notation
// Problem Description:
// Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN). Valid operators are +, -, *, and /. Each
// operand may be an integer or another expression. Note that division between two integers should truncate toward zero.
// Input:
// - An array of strings tokens where tokens[i] is a valid operand or operator.
// Output:
// - Return the value of the arithmetic expression as an integer.
// Example 1:
// Input: ["2", "1", "+", "3", "*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9


function evalRPN(tokens) {
    const stack = [];

    // Helper function to perform arithmetic operations
    const operate = (a, b, operator) => {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return Math.trunc(a / b);
            default:
                throw new Error("Invalid operator");
        }
    };

    // Process each token
    for (let token of tokens) {
        if (["+", "-", "*", "/"].includes(token)) {
            // Pop the last two operands from the stack
            const b = stack.pop();
            const a = stack.pop();
            // Apply the operator and push the result back onto the stack
            const result = operate(a, b, token);
            stack.push(result);
        } else {
            // Push the operand onto the stack
            stack.push(parseInt(token, 10));
        }
    }

    // The result is the last remaining value on the stack
    return stack.pop();
}


console.log(evalRPN(["2", "1", "+", "3", "*"])); 




// 2. Min Stack
// Problem Description:
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// - MinStack(): initializes the stack object.
// - void push(int val): pushes the element val onto the stack.
// - void pop(): removes the element on the top of the stack.
// - int top(): gets the top element of the stack.
// - int getMin(): retrieves the minimum element in the stack.
// Example 1:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top(); // return 0
// minStack.getMin(); // return -2
// Constraints:
// - -2^31 <= val <= 2^31 - 1
// - Methods pop(), top(), and getMin() operations will always be called on non-empty stacks.
// - At most 3 * 10^4 calls will be made to push, pop, top, and getMin  


class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        // Push the new minimum onto the minStack
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        const val = this.stack.pop();
        // If the popped value is the minimum, pop it from the minStack as well
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}


const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2


// 3. Daily Temperatures
// Problem Description:
// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would
// have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
// Input:
// - An array of integers T representing the daily temperatures.
// Output:
// - Return an array of integers, where the ith element is the number of days you have to wait until a warmer temperature.
// If there is no future day for which this is possible, put 0 instead.
// Example 1:
// Input: [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
// Constraints:
// - 1 <= T.length <= 10^5
// - 30 <= T[i] <= 100


function dailyTemperatures(T) {
    const result = new Array(T.length).fill(0);
    const stack = [];

    for (let i = 0; i < T.length; i++) {
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
}


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
