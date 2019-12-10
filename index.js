//Custom solution to Sample test sum

const sum = (a, b) => {
    if(a || b === !Number)
        throw new TypeError('sum() expects only numbers.')
    
}

//Added own sub test, solution below

const sub = (a, b) => {
    return a - b
}






module.exports = {sum, sub}
//Sample code from internet tutorial
// module.exports = function() {

//     // Convert arguments object to an array
//     var args = Array.prototype.slice.call(arguments);
    
//     // Throw error if arguments contain non-finite number values
//     if (!args.every(Number.isFinite)) {
//       throw new TypeError('sum() expects only numbers.')
//     }
    
//     // Return the sum of the arguments
//     return args.reduce(function(a, b) {
//       return a + b
//     }, 0);
// }
//All tests related to sum pass