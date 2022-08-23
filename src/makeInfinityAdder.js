'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function adder(number) {
    if (typeof number !== 'undefined') {
      result += number;
    }

    if (typeof number === 'undefined') {
      const temp = result;

      result = 0;

      return temp;
    }

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
