/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function() {
        return "Hello World";
    }
};
const xyz = createHelloWorld();
console.log(xyz);

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */