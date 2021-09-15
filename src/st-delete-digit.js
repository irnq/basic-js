import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  return +(n + '').split('').reduce((res, el, i, arr) => {
    return +[].concat(arr.slice(0, i), arr.slice(i + 1)).join('') > +res
      ? (res = [].concat(arr.slice(0, i), arr.slice(i + 1)).join(''))
      : res;
  }, '0');
}
