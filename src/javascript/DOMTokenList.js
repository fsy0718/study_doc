/**
 * @class
 * @classdesc 接口表示一组空格分隔的符号（tokens）。如由 Element.classList、HTMLLinkElement.relList、HTMLAnchorElement.relList 或 HTMLAreaElement.relList 返回的一组值。它和 JavaScript Array 对象一样，索引从 0 开始。DOMTokenList 总是区分大小写（case-sensitive）。
 */
function DOMTokenList(){}

/**
 * 表示存储在该对象里值的个数。
 * @type {Number}
 */
DOMTokenList.length = 0

DOMTokenList.prototype = {
  /**
   * 添加一个符号（token）到 DOMTokenList 列表中
   * @param {token} token
   */
  add: function(token){},
  /**
   * 如果 DOMTokenList 列表中包括相应的字符串，则返回 true，否则返回 false。
   * @param {String} string
   * @return {Boolean}
   */
  contains: function(string){},
  /**
   * 根据传入的索引值返回一个值，如果索引值大于等于符号列表的长度（length），则返回 undefined，在 Gecko 7.0 之前的版本中返回 null。
   * @param  {number} idx
   * @return {*}
   */
  item: function(idx){},
  /**
   * 从 DOMTokenList 列表中移除一个符号（token）
   * @param  {token} token
   */
  remove: function(token){},
  /**
   * 从 DOMTokenList 字符串中移除符号字串（token），并返回 false。如果传入的符号字串（token）不存在，则将其添加进去，并返回 true
   * @param  {token} token
   * @return {Boolean}
   */
  toggle: function(token){}

}