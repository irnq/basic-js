import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = [];
    for (let i = 65; i < 91; i++) {
      this.alphabet.push(String.fromCharCode(i));
    }
  }
  encrypt(str, key) {
    if (!str || !key) throw Error('Incorrect arguments!');
    while (key.length < str.length) {
      key = key.repeat(2);
    }
    str = str.toUpperCase().split('');
    key = key.toUpperCase().split('');

    for (let i = 0, j = 0, k; i < str.length; i++) {
      if (this.alphabet.indexOf(str[i]) >= 0) {
        k = (this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(key[j])) % 26;
        str[i] = this.alphabet[k];
        j++;
      }
    }
    return this.type ? str.join('') : str.reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) throw Error('Incorrect arguments!');
    while (key.length < str.length) {
      key = key.repeat(2);
    }
    str = str.toUpperCase().split('');
    key = key.toUpperCase().split('');

    for (let i = 0, j = 0, k; i < str.length; i++) {
      if (this.alphabet.indexOf(str[i]) >= 0) {
        k = (this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(key[j]) + 26) % 26;
        str[i] = this.alphabet[k];
        j++;
      }
    }
    return this.type ? str.join('') : str.reverse().join('');
  }
}
