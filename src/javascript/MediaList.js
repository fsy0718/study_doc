/**
 * @class 包含了 StyleSheet 中的 media 信息集合
 */
function MediaList(){}

/**
 * 集合的长度
 * @type {Number}
 */
MediaList.length = 0

MediaList.prototype = {
  /**
   * 添加一个新的字符串
   * @param {string} newMedium
   * @method
   */
  appendMedium: function(){},
  /**
   * 删除一个 media 字符串
   * @param {string} oldMedium 旧的media字符串
   * @method
   */
  deleteMedium: function(oldMedium){},
  /**
   * 返回指定位置的media字符串
   * @method
   * @param  {Number} idx
   */
  item: function(idx){}
}