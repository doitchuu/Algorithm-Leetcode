/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  let comparedString = t;
  
    for (let i = 0; i < s.length; i++) {
      if (comparedString.indexOf(s[i]) === -1) {
        return false;
      }
      
      comparedString = comparedString.replace(s[i], "");
    }

    if (comparedString.length !== 0) {
      return false;
    }

    return true;
};