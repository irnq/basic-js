import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
// export default {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };

export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(n) {
    n !== undefined ? this.chain.push('( ' + n + ' )') : this.chain.push('( )');
    return this;
  },
  removeLink(n) {
    if (Number.isInteger(n) && n - 1 >= 0 && n - 1 < this.chain.length) {
      this.chain.splice(n - 1, 1);
    } else {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};
