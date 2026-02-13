/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const original = image[sr][sc];
  if (original === color) return image;

  function dfs(r, c) {
    if (
      r < 0 || c < 0 ||
      r >= image.length || c >= image[0].length ||
      image[r][c] !== original
    ) return;

    image[r][c] = color;

    dfs(r+1, c);
    dfs(r-1, c);
    dfs(r, c+1);
    dfs(r, c-1);
  }

  dfs(sr, sc);
  return image;
};