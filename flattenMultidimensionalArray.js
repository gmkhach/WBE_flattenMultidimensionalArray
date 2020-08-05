// Brute force method 
function flattenBrute(input) {
    let result = [];

    input.forEach(arr => {
        result = result.concat(arr);
    })
    
    return result;
}

let mdArray = [[1, 2], [3, 4, 5, 6], [7, 8, 9]];
console.log(flattenBrute(mdArray));

mdArray = [['a', 'b', 'c', 'd'], ['e', 'f'], ['g'], ['g', 'i', 'j', 'k', 'l', 'm'], ['n', 'o'], ['p']];
console.log(flattenBrute(mdArray));

mdArray = [['a', 'b', 'c', 'd'], [1, 2, 3, 4], [{}, {i: Math.sqrt(-1)}]];
console.log(flattenBrute(mdArray));

// Now implement it using the built-in reduce method
function flatten(input) {
    return input.reduce((result, arr) => {
        return result.concat(arr);
    })    
} 

mdArray = [[1, 2], [3, 4, 5, 6], [7, 8, 9]];
console.log(flatten(mdArray));

mdArray = [['a', 'b', 'c', 'd'], ['e', 'f'], ['g'], ['g', 'i', 'j', 'k', 'l', 'm'], ['n', 'o'], ['p']];
console.log(flatten(mdArray));

mdArray = [['a', 'b', 'c', 'd'], [1, 2, 3, 4], [{}, {i: Math.sqrt(-1)}]];
console.log(flatten(mdArray));