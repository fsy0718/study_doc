/**
 * @class
 * @classdesc 任意类型的样式规则（包含普通的规则和@规则）的一个抽象接口
 */
function CSSRule(){}

CSSRule.prototype = {
  /**
   * @constant {number}
   * @deprecated
   */
  UNKDOWN_RULE: 0,
  /**
   * @constant {number}
   */
  STYLE_RULE: 1,
  /**
   * @constant {number}
   * @deprecated
   */
  CHARSET_RULE: 2,
  /**
   * @constant {number}
   */
  IMPORT_RULE: 3,
  /**
   * @constant {number}
   */
  MEDIA_RULE: 4,
  /**
   * @constant {number}
   */
  FONT_FACE_RULE: 5,
  /**
   * @constant {number}
   */
  PAGE_RULE: 6,
  /**
   * @constant {number}
   */
  KEYFRAMES_RULE: 7,
  /**
   * @constant {number}
   */
  KEYFRAME_RULE: 8,
  /**
   * @constant {number}
   */
  NAMESPACE_RULE: 10,
  /**
   * @constant {number}
   */
  COUNTER_STYLE_RULE: 11,
  /**
   * @constant {number}
   */
  SUPPORTS_RULE: 12,
  /**
   * @constant {number}
   */
  DOCUMENT_RULE: 13,
  /**
   * @constant {number}
   */
  FONT_FEATURE_VALUES_RULE: 14,
  /**
   * @constant {number}
   */
  VIEWPORT_RULE: 15,
/**
 * @constant {number
 */
  REGION_STYLE_RULE: 16
}