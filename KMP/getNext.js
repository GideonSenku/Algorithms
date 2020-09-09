/*
 * @Description: 获取next数组
 * @Autor: GideonSenku
 * @Date: 2020-09-08 19:38:40
 * @LastEditors: GideonSenku
 * @LastEditTime: 2020-09-09 11:01:49
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
      next[j] = k
    } else {
      // next[k]表示前k个元素中前后缀元素相同中最长的长度
      k = next[k]
    }
  }
}

module.exports = {
  getNext
}