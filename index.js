//Simplified test solutions

const sum = (a, b) => {
    return a + b
    
}

//Added own sub test, solution below

const sub = (a, b) => {
    return a - b 
}

const modernArt = {
    beautiful: false,
    abstract: true,
    modern: true
}





module.exports = {sum, sub, modernArt}
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