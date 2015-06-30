/**
 * @class 一个抽象的基础接口，主要描述了文档(HTML/XML)中的一个单独的样式表。当文档是 HTML 时，这个接口描述的可能是&#60;link&#62;标签添加的外部 CSS 文件，也可能是&#60;style&#62;标签添加的一些内部样式。当文档是 XML 时，这个接口描述的是通过&#60;?xml-stylesheet&#62;添加的外部 CSS 文件。
 */
function StyleSheet(){}

StyleSheet.prototype = {
  /**
   * 样式表的描述语言，一般值为 text/css
   * @readOnly
   * @type {String}
   */
  type: '',
  /**
   * 该样式表的源文件，当 ownerNode 为&#60;style&#62;时 href 为 null
   * @readOnly
   * @type {String}
   */
  href: '',
  /**
   * 该样式表是否为disabled状态
   - [是否启用样式](../../example/javascript/StyleSheetsModule/StyleSheet/disabled.html)
   * @type {Boolean}
   */
  disabled: false,
  /**
   * 样式在什么的显示媒体下生效，media 属性返回的是一个 MediaList 实例
   * @readOnly
   * @type {MediaList}
   */
  media: '',
  /**
   * 该样式表所属的节点，对 HTML 来言可能是&#60;link&#62;或&#60;style&#62;
   * @readOnly
   * @type {Node}
   */
  ownerNode: '&#60;link&#62;',
  /**
   * 该样式表的父样式表，如果不支持样式表包含那么值为 null
   * @readOnly
   * @type {StyleSheet}
   */
  parentStyleSheet: null,
  /**
   * 样式表的 title 信息
   * @readOnly
   * @type {DOMString}
   */
  title: ''
}