/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2022-02-25 23:44:56
 * @LastEditTime: 2022-02-25 23:44:59
 * @LastEditors: Lewis
 */
export function convertDate(d) {
    var now = new Date(d)
    var year = now.getFullYear() // 得到年份
    var month = now.getMonth() // 得到月份
    var date = now.getDate() // 得到日期
    var hour = now.getHours()
    var minute = now.getMinutes()
    var second = now.getSeconds()
    month = month + 1
    month = month.toString().padStart(2, '0')
    date = date.toString().padStart(2, '0')
    hour = hour.toString().padStart(2, '0')
    minute = minute.toString().padStart(2, '0')
    second = second.toString().padStart(2, '0')
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`
  }