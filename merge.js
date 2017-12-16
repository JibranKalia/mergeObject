
/**
 * Helper function to ensure passed in paramter is a function.
 * https://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type 
 * @param {*} obj 
 */

const isFunction = (functionToCheck) => {
  const getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

const merge = (src1, src2, decisionFunc) => {
  if (Array.isArray(src1) || Array.isArray(src2)) {
    throw new Error('Merge only accepts Objects');
  }
  if (decisionFunc && isFunction(decisionFunc)) {
    throw new Error('decision Func has to be an object');
  }
  const output = {};
  Object.keys(src1).forEach((key) => {
    output[key] = src1[key];
  });
  Object.keys(src2).forEach((key) => {
    if (output[key] && decisionFunc) {
      output[key] = decisionFunc(output[key], src2[key]);
    } else if (output[key]) {
      output[key] = output[key];
    } else {
      output[key] = src2[key];
    }
  });
  return output;
};



const a = {
  x: 3,
  y: 4,
};
const b = {
  y: 3,
};

const sum = (x, y) => x + y;
// const expected = {
//   x: 3,
//   y: 3,
// };


console.log(merge(a, b, sum));


module.exports = merge;
