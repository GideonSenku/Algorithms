/*
 * @Description: 字符串匹配算法,暴力匹配
 * @Autor: GideonSenku
 * @Date: 2020-09-08 19:22:00
 * @LastEditors: GideonSenku
 * @LastEditTime: 2020-09-08 19:38:19
 */
const str = 'hello,world'
const p = 'hello1'

console.log(ViolentMatch(str, p));



function ViolentMatch(s, p) {
  const sarr = s.split('')
  const parr = p.split('')
  let i = 0
  let j = 0
  while (i < s.length && j < p.length) {
    if (sarr[i] == parr[j]) {
      i++
      j++
    } else {
      i = i - j + 1
      i = 0
    }
  }
  return i == j ? true : false
}