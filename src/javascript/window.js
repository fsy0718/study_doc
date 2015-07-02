define(function(){
  /**
   * @module window
   * @description window对象 ：
   * @type {Object}
   */
  var exports = {
  /**
   * 得出所有在应用有效的样式和分解任何可能会包含值的基础计算后的元素的CSS属性值【返回的是used value，参考[jQuery 源码：操作样式](http://www.cnblogs.com/yaozhiyi/archive/2013/01/22/2868733.html)】
   ###### 浏览器支持如下:
   - 支持：<strong class="iconfont browser" data-browser="ie" data-version="9+">IE</strong><strong class="iconfont browser" data-browser="chrome">chrome</strong><strong class="iconfont browser" data-browser="firefox">firefox</strong><strong class="iconfont browser" data-browser="safari">safari</strong>
   - 不支持：<strong class="iconfont browser" data-support="false" data-browser="ie" data-version="8-">IE8-</strong>  请用[HTMLElement#currentStyle](/javascript/HTMLElement.html#currentStyle)
     * @param  {HTMLElement} dom 用于计算样式的元素
     * @param  {string}  [pseudoElt]   指定一个伪元素进行匹配。对于常规的元素来说可省略
     * @return {CSSStyleDeclaration}
     */
    getComputedStyle: function(dom,pseudoElt){}

  }
  return exports;
})