/*
 * @Description: 字符串匹配算法,暴力匹配
 * @Autor: GideonSenku
 * @Date: 2020-09-08 19:22:00
 * @LastEditors: GideonSenku
 * @LastEditTime: 2020-09-09 10:42:20
 */

const str = 'hello,world'
const p = 'hello'

console.log(ViolentMatch(str.split(''), p.split('')));



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
  return i == j ? i - j : false
}