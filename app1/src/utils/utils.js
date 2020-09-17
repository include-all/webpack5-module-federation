// 工具类，此处随意写几个方法

export const add = (a, b) => {
  return a + b
}

/**
 *获取数组中的最大值或最小值
 * @param {*} arr
 * @param {*} type
 */
export const getMostNum = (arr, type = 'max') => {
  return Math[type](...arr)
}
