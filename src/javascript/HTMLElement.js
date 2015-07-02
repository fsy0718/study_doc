/**
 * @class
 * @extends {Element}
 */
function HTMLElement(){}

/**
 * @inheritDoc
 */
HTMLElement.prototype = {
  /**
   * 返回包含当前节点style属性对象 **webkit是{@link CSSStyleDeclaration}对象，IE是MSStyleCSSProperties对象【IE8-是object Object对象】 moz返回CSS2Properties对象**
   - 是特殊的CSSStyleDeclaration对象，可以获取复合属性【当style属性中设置了复合属性】，而且获取的也不是最终计算值 [实例](../../example/javascript/CSSModule/CSSStyleDeclaration/getComputedStyle_style.html)
   * @type {Object}
   */
  style: 'CSSStyleDeclaration',
  /**
   * <strong class="iconfont browser" data-browser="ie">IE</strong>
    返回当前的样式【类似specified value的值，参考[jquery源码：操作样式](http://www.cnblogs.com/yaozhiyi/archive/2013/01/22/2868733.html)】 [currentStyle与style的区别](../../example/javascript/HTMLElement/currentStyle.html)
   - 返回的样式不是最终计算的样式 **如font-size: 1em,返回的也是1em**
    - [利用pixelLeft获取单位为px的结果](../../example/javascript/HTMLElement/pixelLeft.html)
   - 不能查询复合样式 复合样式在IE9+是返回空字符串，IE8-是返回undefined
   * @readOnly
   * @type {Object}
   */
  currentStyle: {},
  /**
   * <strong class="iconfont browser" data-browser="ie">IE</strong>
    设置当前节点的样式，设置的样式只能通过currentStyle访问，通过style属性不能访问
   - [runtimeStyle的用法](http://hedgehogking.com/?p=169)
   - [rumtimeStyle属性](http://www.cnblogs.com/birdshome/archive/2006/04/24/runtimestyle.html)
   * @type {Object}
   */
  runtimeStyle: {},
}