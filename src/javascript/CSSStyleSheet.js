/**
 * @class
 * @extends {StyleSheet}
 */
function CSSStyleSheet(){}


/**
 * @inheritDoc
 */
CSSStyleSheet.prototype = {
  type: '',
  href: '',
  disabled: false,
  media: 'media',
  ownNode: '',
  title: '',
  parentStyleSheet: '',
  /**
   * 如果一个样式表示通过@import 规则引入document的，则ownerRule将返回那个{@link CSSImportRule}对象，否则返回null
   * @type {CSSImportRule|null}
   */
  ownerRule: '',
  /**
   * 返回样式表中CSS规则的CSSRuleList对象
   * @type {CSSRuleList}
   */
  cssRules: 'CSSRuleList',
  /**
   * 返回样式表中css规则的类数组对象 IE支持,也是一个CSSRuleList对象
   * @type {Object}
   */
  rules: 'object',
  /**
   * 向样式表中添加一条新规则 IE9+支持 **cssRules中是CSSRuleList的实例 CSSRuleList中包含的是CSSStyleRule CSSStyleRule是CSSRule的实例 而CSSStyleRule中的style是CSSStyleDeclaration的实例**
   - [添加样式实例](../../example/javascript/CSSModule/CSSStyleSheet/rule.html)
   - [在cssRules中操作CSSStyleDeclaration](../../example/javascript/cssModule/CSSStyleDeclaration/getComputedStyle.html)
   * @param  {DOMString} rule 新的包含DOMString的规则
   * @param  {number} idx  位置，如果大于cssRules中索引的最大值【即cssRules.length 或rules.length】会抛出异常
   * @return {number}      返回当前的位置
   */

  insertRule: function(rule,idx){},
  /**
   * 从样式表中删除一条规则 IE9+支持
   * @param  {number} idx 位置 如果大于cssRules中索引的最大值【即cssRules.length 或rules.length】会抛出异常
   */
  deleteRule: function(idx){},
  /**
   * 添加规则 **IE专用[chrome也有]**
   * @param {DOMString} selector
   * @param {string} rule     规则
   * @param {number} idx      位置，如果大于cssRules中索引的最大值【即rules.length】，会默认为rules.length
   * @return [-1|number]  IE7-返回-1,IE8+返回idx位置
   */
  addRule: function(selector,rule,idx){},
  /**
   * 从样式表中删除一条规则**IE专用**
   * @param  {number} idx 位置 如果大于cssRules中索引的最大值【即rules.length】会抛出异常
   */
  removeRule: function(idx){},
  /**
   * IE专用，返回当前样式表，可以用来直接操作样式表，此属性不放入StyleSheet，因为觉得styleSheets已经是CSSStyleSheet的实例了，虽然是StyleSheet的子类，IE不能查到原型，故放在此
   - [在IE中利用CSSStyleSheet中的cssText属性操作样式表](../../example/javascript/CSSModule/CSSStyleSheet/cssText.html)
   * @type {String}
   */
  cssText: ''
}