define(function(){
  /**
   * @module window
   * @description window对象
   * @type {Object}
   */
  var exports = {
    /**
     * @method
     * @description 得出所有在应用有效的样式和分解任何可能会包含值的基础计算后的元素的CSS属性值
     * @param  {HTMLElement} dom 用于计算样式的元素
     * @param  {string}  [pseudoElt]   指定一个伪元素进行匹配。对于常规的元素来说可省略
     * @return {CSSStyleDeclaration}
     */
    getComputedStyle: function(dom,pseudoElt){}
  }
  return exports;
})