/**
 * Helper function to ensure passed in paramter is a function.
 * https://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
 * @param {*} obj
 */

const isFunction = (functionToCheck) => {
  const getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

/**
 * Check if obj is a non-null object
 * @param {objec} obj
 */
const isObject = obj => !!obj && typeof obj === 'object';

/**
 * Merge function does a recursive merge of two objects.
 * In case of collision, it uses the decision func if present otherwise it uses dst's value
 * This inital function is for error checking.
 * @param {object} dst
 * @param {object} src
 * @param {function} decisionFunc
 */

const merge = (dst, src, decisionFunc) => {
  if (!isObject(dst) || !isObject(src)) {
    throw new Error('Merge only accepts Non Null Objects');
  }
  if (decisionFunc && !isFunction(decisionFunc)) {
    throw new Error('decision Func has to be a Function');
  }
  return mergeObject(dst, src, decisionFunc);
};

/**
 * Main Recursive Merge Function.
 * @param {object} dst
 * @param {object} src
 * @param {function} decisionFunc
 */
const mergeObject = (dst, src, decisionFunc) => {
  const out = {};
  // No need to copy if not an object
  if (isObject(dst)) {
    Object.keys(dst).forEach((key) => {
      out[key] = dst[key];
    });
  }
  Object.keys(src).forEach((key) => {
    if (!(isObject(src[key]) && dst[key])) {
      if (!dst[key]) {
      // If dst doesn't have anything copy it over
        out[key] = src[key];
      } else if (decisionFunc) {
        // Use decision func to deal with collision.
        // if decision func does't exist dst is already in out
        out[key] = decisionFunc(dst[key], src[key]);
      }
    } else {
      // src is an object. Recurse.
      out[key] = mergeObject(dst[key], src[key], decisionFunc);
    }
  });
  return out;
};

module.exports = merge;