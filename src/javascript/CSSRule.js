/**
 * @class
 * @classdesc 任意类型的样式规则（包含普通的规则和@规则）的一个抽象接口
 */
function CSSRule(){}

CSSRule.prototype = {
  /**
   * @constant {number}
   * @default 0
   * @deprecated
   */
  UNKDOWN_RULE: 0,
   /**
   * @constant {number}
   * @default 1
   */
  STYLE_RULE: 1,
  /**
   * @constant {number}
   * @default 2
   * @deprecated
   */
  CHARSET_RULE: 2,
  /**
   * @constant {number}
   * @default 3
   */
  IMPORT_RULE: 3,
  /**
   * @constant {number}
   * @default 4
   */
  MEDIA_RULE: 4,
  /**
   * @constant {number}
   * @default 5
   */
  FONT_FACE_RULE: 5,
  /**
   * @constant {number}
   * @default 6
   */
  PAGE_RULE: 6,
  /**
   * @constant {number}
   * @default 7
   */
  KEYFRAMES_RULE: 7,
  /**
   * @constant {number}
   * @default 8
   */
  KEYFRAME_RULE: 8,
  /**
   * @constant {number}
   * @default 10
   */
  NAMESPACE_RULE: 10,
  /**
   * @constant {number}
   * @default 11
   */
  COUNTER_STYLE_RULE: 11,
  /**
   * @constant {number}
   * @default 12
   */
  SUPPORTS_RULE: 12,
  /**
   * @constant {number}
   * @default 13
   */
  DOCUMENT_RULE: 13,
  /**
   * @constant {number}
   * @default 14
   */
  FONT_FEATURE_VALUES_RULE: 14,
  /**
   * @constant {number}
   * @default 15
   */
  VIEWPORT_RULE: 15,
  /**
   * @constant {number}
   * @default 16
   */
  REGION_STYLE_RULE: 16,
  /**
   * 返回该条规则的数字类型值
   - [从 CSSStyleSheet中返回的CSSRule的实例](../../example/javascript/CSSModule/CSSRule/rule.html)
   * @readOnly
   * @type {Number}
   */
  type: 0,
  /**
   * 返回规则的内容，注意这个属性得到的是当前的值（可能被修改过）而不是初始化的值
   * @type {String}
   */
  cssText:'',
  /**
   * 如果这个规则是被包含在另外一条规则中（如@media 中包含的规则），那么返回包含它的规则，否则返回 null
   * @readOnly
   * @type {String}
   */
  parentRule: '',
  /**
   * 返回包含该规则的 StyleSheet
   * @readOnly
   * @type {StyleSheet}
   */
  parentStyleSheet: 'StyleSheet'

  }