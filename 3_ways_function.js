// Function declaration
function twoNumbers(number1, number2){
    const squaredNumberOne = number1 * number1;
    const squaredNumberTwo = number2 * number2;
    const sumOne = squaredNumberOne + squaredNumberTwo;
    const sumSquared = sumOne * sumOne;
    return sumSquared;
}

console.log(twoNumbers(1,2)); // Logging gives '25'
console.log(twoNumbers(5,10)); // Logging gives '15625'

// Function expression
const two_Numbers = function(number_1, number_2){
    const squared_NumberOne = number_1 * number_1;
    const squared_NumberTwo = number_2 * number_2;
    const sum_One = squared_NumberOne + squared_NumberTwo;
    const sum_Squared = sum_One * sum_One;
    return sum_Squared;
};

console.log(twoNumbers(1,2)); // Logging gives '25'
console.log(twoNumbers(5,10)); // Logging gives '15625'

// Arrow function
const _two_Numbers = (n1, n2) => {
    const squared_Number_One = n1 * n1;
    const squared_Number_Two = n2 * n2;
    const _sum_One = squared_Number_One + squared_Number_Two;
    const _sum_Squared = _sum_One * _sum_One;
    return _sum_Squared;
};

console.log(twoNumbers(1,2)); // Logging gives '25'
console.log(twoNumbers(5,10)); // Logging gives '15625'
