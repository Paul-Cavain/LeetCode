/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args); // Call the function and store the result
            return result;
        }
        return undefined; // Return undefined for subsequent calls
    };
};

/**
 * let fn = (a, b, c) => (a + b + c);
 * let onceFn = once(fn);
 *
 * console.log(onceFn(1, 2, 3)); // 6
 * console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
 */
