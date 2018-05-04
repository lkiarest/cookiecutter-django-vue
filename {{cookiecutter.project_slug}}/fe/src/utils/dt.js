/**
 * datetime functions
 */

export const format = function (dt, format = 'yyyy-MM-dd hh:mm:ss') {
  var o = {
    'M+': dt.getMonth() + 1, // month
    'd+': dt.getDate(), // day
    'h+': dt.getHours(), // hour
    'm+': dt.getMinutes(), // minute
    's+': dt.getSeconds(), // second
    'q+': Math.floor((dt.getMonth() + 3) / 3), // quarter
    'S': dt.getMilliseconds() // millisecond
  }

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (dt.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1,
        RegExp.$1.length === 1 ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }

  return format
}

export default {
  format
}
