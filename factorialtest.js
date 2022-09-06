/* eslint-disable linebreak-style */
const factorial = (num) => {
  let result = 1;

  if (num === 0 || num === 1) {
    return result;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = num; i >= 1; i--) {
    // console.log(i);
    result *= i;
  }
  return result;
};
module.exports = factorial;
