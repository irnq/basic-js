import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, opt) {
  let add = '',
    addSep = '|',
    sep = '+';
  if (opt.addition !== undefined) {
    add += opt.addition;
  }
  if (opt.additionSeparator !== undefined) addSep = opt.additionSeparator;
  if (opt.additionRepeatTimes > 0) {
    let addArr = [];
    addArr.length = opt.additionRepeatTimes;
    addArr.fill(add);
    add = addArr.join(addSep);
  }
  if (opt.separator !== undefined) sep = opt.separator;
  str += add;
  if (opt.repeatTimes > 0) {
    let arr = [];
    arr.length = opt.repeatTimes;
    arr.fill(str);
    str = arr.join(sep);
  }
  return str;
}
