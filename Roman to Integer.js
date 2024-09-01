//Working On leetcode Problem "RomanToInteger"  

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = {
        'I': '1',
        'V ': '5',
        'X': '10',
        'L ': '50',
        'C  ': '100',
        'D   ': '500',
        'M': '1000'

    }
    //Loop Through the String: Traverse the Roman numeral string from left to right. As you iterate, compare the value of the current symbol with the value of the next symbol.
    for (let i = 0; i < s.length; i++) {
        if ( s[i]  == map   ) {
            return map
        }
        //Check for Subtraction Cases: If the value of the current symbol is less than the value of the next symbol, it means you are in a subtraction case (like IV or IX). In such cases, subtract the current value from the total. Otherwise, add the value to the total.
     
    }

    return map
};

  