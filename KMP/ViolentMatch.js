/*
 * @Description: 字符串匹配算法,暴力匹配
 * @Autor: GideonSenku
 * @Date: 2020-09-08 19:22:00
 * @LastEditors: GideonSenku
 * @LastEditTime: 2020-09-09 18:31:36
 */

const str = 'hello,world'
const p = 'world'

console.log(ViolentMatch(str, p));

function ViolentMatch(s, p) {
  let i = 0
  let j = 0
  while (i < s.length && j < p.length) {
    if (s[i] == p[j]) {
      i++
      j++
    } else {
      i = i - j + 1
      j = 0
    }
  }
  return j == p.length ? i - j : false
}