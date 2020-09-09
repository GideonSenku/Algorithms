/*
 * @Description: KMP字符串匹配
 * @Autor: GideonSenku
 * @Date: 2020-09-09 10:35:27
 * @LastEditors: GideonSenku
 * @LastEditTime: 2020-09-09 11:01:32
 */

const { getNext } = require('./getNext')

const str = 'BBC ABCDAB ABCDABCDABDE'
const ptr = 'ABCDABD'
let next = []
getNext(ptr.split(''), next)

console.log(KmpSearch(str.split(''), ptr.split('')))

function KmpSearch(s, p) {
  let i = 0
  let j = 0
  while(i < s.length && j < p.length) {
    // 如果j = -1，或者当前字符匹配成功（即S[i] == P[j]），都令i++，j++   
    if (j == -1 || s[i] == p[j]) {
      i++
      j++
    } else {
      // 如果j != -1，且当前字符匹配失败（即S[i] != P[j]），则令 i 不变，j = next[j]
      // next[j]即为j所对应的next值
      j = next[j]
    }
  }
  return j == p.length ? i - j : false
}

