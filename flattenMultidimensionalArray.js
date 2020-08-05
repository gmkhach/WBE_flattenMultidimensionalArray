 
function flatten(input) {
    let result = [];

    input.forEach(arr => {
        result = result.concat(arr);
    })
    
    return result;
}

let mdArray = [[1, 2], [3, 4, 5, 6], [7, 8, 9]];
console.log(flatten(mdArray));

mdArray = [['a', 'b', 'c', 'd'], ['e', 'f'], ['g'], ['g', 'i', 'j', 'k', 'l', 'm'], ['n', 'o'], ['p']];
console.log(flatten(mdArray));

mdArray = [['a', 'b', 'c', 'd'], [1, 2, 3, 4], [{}, {i: Math.sqrt(-1)}]];
console.log(flatten(mdArray));