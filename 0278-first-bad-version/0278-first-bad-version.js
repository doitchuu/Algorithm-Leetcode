/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // 해당 함수에서는 가장 최근의 나쁜 버전을 return 
        // n개 버전이 있다. 근데 맨 중간꺼를 확인해서, <- -> 빼면 되는 거긴함 
        let start = 1;
        let end = n;

        while (start < end) {
            const middle = Math.floor((start + end) / 2);

            if (isBadVersion(middle)) {
                end = middle;
            } else {
                start = middle + 1;
            }
        }

        return start;
    };
};