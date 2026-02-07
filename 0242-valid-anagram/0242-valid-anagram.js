/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const max = Math.max(s.length, t.length);
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < max; i++) {
    if (s[i]) {
      sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
    }
    if (t[i]) {
      tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
    }
  }

  if (sMap.size !== tMap.size) {
    return false;
  }

  for (const [char, count] of sMap) {
    if (tMap.get(char) !== count) {
        return false;
    }
  }

  return true;
};