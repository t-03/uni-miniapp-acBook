/**
 * import parseTime, formatTime and set to filter
 */
export { parseTime, dateParseTime, formatTime } from "@/utils";

/**
 * 处理年月日
 * @param value
 * @returns {string}
 */
export function forMateTime (value) {
  const date = new Date(value * 1000);
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return y + "年" + m + "月" + d + "日";
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter (num, digits) {
  const si = [
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "G" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "k" }
  ];
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].symbol;
    }
  }
  return num.toString();
}

/**
 * 数字转换
 * like 10000 => 1w、100000000 => 1亿
 * @param {Number} num
 * @param {Number} point
 */
export function tranNumber (num, point = 2) {
  let numStr = String(num);

  if (numStr.length < 5) {
    // 一万以内直接返回
    return numStr;
  } else if (numStr.length > 4) {
    //大于5位数是一万 (以1W分割 1W以下全部显示)
    let decimal = numStr.substring(numStr.length - 3, numStr.length - 3 + point);
    return parseFloat(parseInt(num / 10000) + "." + decimal) + "w";
  } else if (numStr.length > 8) {
    //大于8位数是亿
    let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
    return parseFloat(parseInt(num / 100000000) + "." + decimal) + "亿";
  }
}

/**
 * 判断是不是字符串
 * @param str {String|Number|Object}
 * @returns {boolean}
 */
export function isString (str) {
  return Object.prototype.toString.call(str) === "[object String]";
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter (num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
}

/**
 * 17633333333 => "176****3333"
 * @param {number} num
 */
export function toPhoneFilter (num) {
  return (+num || 0).toString().replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}

/**
 * 日期截取
 * @param start
 * @param end
 * @returns {*}
 */
export function intTime (start, end) {
  return `${start.substring(0, 10)}~${end.substring(0, 10)}`;
}
