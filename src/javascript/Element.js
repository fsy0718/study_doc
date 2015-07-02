/**
 * @class
 * @classdesc 接口是 Document的一个对象. 这个接口描述了所有相同种类的元素所普遍具有的方法和属性
 */
function Element(){}

/**
   * 返回一个包含元素 class 属性的 token list
   * @extends {DOMTokenList}
   * @inheritDoc
 */
function classList(){}
/**
 *  切换一个 class 是否存在于一个元素的 class 列表中
 * @param  {string}  attributeName 需要toggle的类名
 * @param  {Boolean} [isTrue]       false表示移除 true表示添加

 */
classList.prototype.toggle = function(attributeName,isTrue){}

/**
 * @borrows classList as Element.classList
 * @type {Object}
 */
Element.prototype = {
  getAttribute: function(attributeName){},
  setAttribute: function(attributeName,value){},
  removeAttribute: function(attributeName){},
  getBoundingClientRect: function(){},
  classList: classList
}

