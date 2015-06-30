/**
 * @class 一个包含了 StyleSheet 的有序集合。我们可以通过 document.styleSheets 来得到这个集合，然后直接通过下标访问每个 StyleSheet，如 document.styleSheets[0]。StyleSheetList 有一个属性 length 和一个方法 item(index)。Length 表示集合的长度，方法可以通过索引来取得对应的 StyleSheet。
 */
function StyleSheetList(){}

/**
 * 集合的长度
 * @type {Number}
 */
StyleSheetList.length = 0

StyleSheetList.prototype = {
  /**
   * 返回指定位置上的StyleSheet
   * @param {number} idx 指定位置
   * @return {StyleSheet}
   */
  item: function(idx){}
}