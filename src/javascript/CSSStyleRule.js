/**
 * @extends {CSSRule}
 * @class
 * @classdesc 返回一条CSS 样式规则，它实现了 CSSRule.STYLE_RULE 类型的 cssRule指定规则的接口
 */
function CSSStyleRule(){}

CSSStyleRule.prototype = {
  /**
   * @default 1
   * @const {Number}
   */
  type:1,
  /**
   * 返回当前规则的选择器
   * @type { DOMString}
   */
  selectorText: '',
  /**
   * 返回一个 CSSStyleDeclaration 对象
   * @readOnly
   * @type {CSSStyleDeclaration}
   */
  style: ''
}