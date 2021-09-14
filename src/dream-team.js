import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let bandName = members.reduce((band, el) => {
      if (typeof el === 'string') {
        return (band += el.trim().toUpperCase()[0]);
      }
      return band;
    }, '');
    return bandName.length > 0 ? bandName.split('').sort().join('') : false;
  }
  return false;
}
