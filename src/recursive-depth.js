import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    if (!arr) return 0;
    if (arr.length === 0) return 1;
    arr = arr.filter(el => Array.isArray(el));
    if (arr.length === 0) return 1;
    let depth = Math.max(...arr.map(a => this.calculateDepth(a)));
    return depth > 0 ? depth + 1 : 1;
  }
}
