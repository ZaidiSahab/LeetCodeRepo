//Working In Progress


// Stack to store opening brackets
// Map to store matching pairs of brackets
// Iterate through each character in the string using a traditional for loop
// If the character is a closing bracket
// Pop the top element from the stack (if any)
// Check if the popped element matches the corresponding opening bracket
// Not a valid string
// If it's an opening bracket, push it onto the stack
// If the stack is empty, all brackets were matched correctly



var isValid = function(s) {
let stack = []

// Map to store matching pairs of brackets
let map = {
    ")": "(",
    "]": "[",
    "}": "{"
};


// Iterate through each character in the string using a traditional for loop
for (let i = 0; i < s.length; i++) {
    const char = s[i]
//If the character is a closing bracket
    if (char in map) {
        // Pop the top element from the stack (if any)
     const topElem = stack.length> 0 ? stack.pop() :null
// Check if the popped element matches the corresponding opening bracket

if(topElem !== map[char])
{
    return false
}
      
    }
    else {
        stack.push(char)
     }

}
return stack.length === 0;
};






