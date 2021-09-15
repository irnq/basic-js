import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(dom) {
  return dom
    .map(el => el.split('.').reverse())
    .reduce((obj, arr) => {
      arr.reduce((res, el) => {
        res += '.' + el;
        obj[res] ? obj[res]++ : (obj[res] = 1);
        return res;
      }, '');
      return obj;
    }, {});
}
