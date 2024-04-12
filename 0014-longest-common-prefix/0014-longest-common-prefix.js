/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  let answer = strs[0];
  
  for (const str of strs) {
    answer = findLongesPrefix(answer, str);
    
    if (answer === "") {
      break;
    }
  }
  
  return answer;
};


const findLongesPrefix = function(left, right) {
  let prefix = left;

  while (right.indexOf(prefix) !== 0) {
    prefix = prefix.slice(0, prefix.length - 1);
    
    if (prefix === "") {
      break;
    }
  }
  
  return prefix;
}