/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let leftIndex = 0;
  let rightIndex = 1;
  let max_profit = 0;
  
  while (rightIndex < prices.length) {
    if (prices[leftIndex] < prices[rightIndex]) {
      let profit = prices[rightIndex] - prices[leftIndex];

      max_profit = Math.max(max_profit, profit);
    } else {
      leftIndex = rightIndex;
    }
    
    rightIndex++;
  }
  
  return max_profit;
};