/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const regex = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  const result = s.replace(regex, "").toLowerCase();
  const firstHalf = result.slice(0, result.length / 2);
  const secondHalf = result.slice(result.length / 2, result.length);

  
  for (let i = 0; i < firstHalf.length; i++) {
    if (firstHalf[i] !== secondHalf[secondHalf.length - 1 - i]) {
      return false;
    }
  }
  
  return true;
}
