/**
 * @constructor
 * @description 可以通过 window.getComputedStyle 获取
 - 计算样式的属性是只读
 - 计算样式的值是绝对值【会将百分比和点之类相对的单位全部转换成绝对值】,所有指定尺寸的属性都会有一个以像素为度量单位的值,颜色的属性将会以 rgb 或 rgba 的格式返回
 - 不会计算符合属性，只基于最基础的属性[chrome43已经可以获取组合属性]
 - 计算样式的 cssText 属性未定义
 - 计算样式与 style{@link HTMLElement.style} 获取不同，[实例](../../example/javascript/CSSModule/CSSStyleDeclaration/getComputedStyle_style.html)
 */
function CSSStyleDeclaration(){}

/**
 * 属性的数量
 * @type {Number}
 */
CSSStyleDeclaration.length = 0

CSSStyleDeclaration.prototype = {
  /**
   * 返回可选的优先级，"Important"或空字符串
   * @return {string} ['important'| '']
   * @example
   * styleObj.getPropertyPriority('color')
   */
  getPropertyPriority: function(){},
  /**
   * 返回属性值
   * @param {string} prop 需要获取的键 **不能输入驼峰字符串，只能输入css属性**
   * @return {string}
   * @example
   * styleObj.getPropertyvalue()
   */
  getPropertyValue: function(prop){},
  /**
   * 返回属性名或空字符串
   * @param  {number} idx 返回指定位置的属性名
   * @return {string}
   */
  item: function(idx){},
  /**
   * 删除属性，未删除成功，抛出异常，属性为readonly
   * @param {string} prop 被删除的属性
   * @return {string} 返回被删除的属性
   */
  removeProperty: function(prop){},
  /**
   * 设置属性,未设置成功，抛出异常，属性为readonly
   * @param {string} prop     属性
   * @param {string} val      值
   * @param {string} priority 优先级
   */
  setProperty: function(prop,val,priority){}
}
