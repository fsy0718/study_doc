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
   * 向样式表中添加一条新规则 IE9+支持
   - [添加样式实例](../../example/javascript/CSSModule/CSSStyleSheet/rule.html)
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
  removeRule: function(idx){

  }
}