//Googled Solved Query

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to store opening brackets
    const stack = [];
    
    // Map to store matching pairs of brackets
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate through each character in the string
    for (let char of s) {
        // If the character is a closing bracket
        if (char in bracketPairs) {
            // Pop the top element from the stack (if any)
            const topElement = stack.length > 0 ? stack.pop() : null;
            
            // Check if the popped element matches the corresponding opening bracket
            if (topElement !== bracketPairs[char]) {
                return false;  // Not a valid string
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};

// Example usage:
console.log(isValid("()"));      // Output: true
console.log(isValid("()[]{}"));  // Output: true
console.log(isValid("(]"));      // Output: false
console.log(isValid("([])"));    // Output: true
console.log(isValid("([)]"));    // Output: false
