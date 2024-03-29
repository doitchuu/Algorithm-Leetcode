/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let string = s;

  if (s.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" && string[i + 1] === ")") {
      string = string.slice(0, i) + string.slice(i + 2);
      i = i - 2;

      continue;
    }

    if (string[i] === "{" && string[i + 1] === "}") {
      string = string.slice(0, i) + string.slice(i + 2);
      i = i - 2;

      continue;
    }

    if (string[i] === "[" && string[i + 1] === "]") {
      string = string.slice(0, i) + string.slice(i + 2);
      i = i - 2;

      continue;
    }
  }

  if (string.length === 0) {
    return true;
  }

  return false;
};
