/*
 * @Description: 获取next数组
 * @Autor: GideonSenku
 * @Date: 2020-09-08 19:38:40
 * @LastEditors: GideonSenku
 * @LastEditTime: 2020-09-10 19:54:18
 */

const getNext = (p, next = []) => {
  next[0] = -1
  let j = 0
  let k = -1
  while (j < p.length - 1) {
    // p[k]表示前缀 p[j]表示后缀
    if (k == -1 || p[j] == p[k]) {
      k++
      j++
      // 2020.09.10优化getNext
      // KMP中不能允许p[j] = p[ next[j ]]：
      // 当p[j] != s[i] 时，下次匹配必然是p[ next [j]] 跟s[i]匹配，如果p[j] = p[ next[j] ]，必然导致后一步匹配失败
      if (p[j] != p[k]) { // p[j] != p[k] 直接将k赋给next[j], next[j] = k, k是动态的
        next[j] = k
      } else {
        next[j] = next[k] // P[j] = p[k], 则再次递归
      }
        
    } else {
      // next[k]表示前k个元素中前后缀元素相同中最长的长度
      k = next[k]
    }
  }
}

module.exports = {
  getNext
}