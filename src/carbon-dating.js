import { NotImplementedError } from '../extensions/index.js';

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(str) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  if (!(typeof str === 'string')) return false;
  str = +str;
  if (str > 0 && str < 15) {
    let result = Math.ceil((Math.log(MODERN_ACTIVITY / str) * HALF_LIFE_PERIOD) / 0.693);
    return Number.isInteger(result) ? result : false;
  } else {
    return false;
  }
}
