define(function(){
  /**
* @module StyleSheetsModule
*/
  var exports = {
    /**
     * 一个抽象的基础接口,主要描述了文档(HTML/XML)中的一个单独的样式表。当文档是 HTML 时，这个接口描述的可能是&#60;link&#62;标签添加的外部 CSS 文件，也可能是&#60;style&#62;标签添加的一些内部样式。当文档是 XML 时，这个接口描述的是通过&#60;?xml-stylesheet&#62;添加的外部 CSS 文件。
     * @type {StyleSheet}
     */
     StyleSheet: 'StyleSheet',
     /**
      * 一个包含了 StyleSheet 的有序集合
      * @type {StyleSheetList}
      */
     StyleSheetList: 'StyleSheetList',
     /**
      * StyleSheet 中的 media 信息集合
      * @type {MediaList}
      */
     MediaList: 'MediaList',
     /**
      * 提供一种从&#60;link&#62;,&#60;style&#62;节点获取样式表的方式
      * @type {LinkStyle}
      */
     LinkStyle: 'LinkStyle',
     /**
      * 从嵌入文档的样式中获得样式表的方式
      * @type {DocumentStyle}
      */
     DocumentStyle: 'DocumentStyle'
  };

  return exports;
})


