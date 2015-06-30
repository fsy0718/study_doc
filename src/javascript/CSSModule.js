define(function(){
  /**
* @module CSSModule
* @description
- 这个模块包含了 CSSStyleSheet，CSSRuleList，CSSRule，CSSStyleRule，CSSStyleDeclaration 等 21 个接口，这些接口主要是为了让 web 程序开发者可以直接操作样式表中的样式，动态添加或移除某些样式。
- StyleSheetsModule模块中包含的接口主要是通过 Document 接口来访问样式表 StyleSheet 实例，而对于实例内部所包含的用户定义样式则通过CSSModule模块的接口来控制。
- 对每一个&#60;link&#62;或&#60;style&#62;嵌入文档的样式表，都有一个 CSSStyleSheet 的实例与之对应，这个接口是 StyleSheet 的子接口。这个接口允许访问样式表中的用户定义样式规则的集合 CSSRuleList，并且可以进行增删改的操作。
- 一个CSS样式表包含了一组CSS规则(CSS rules)。每条CSS规则可以通过与之相关联的的对象进行操作，这个关联对象实现了CSSStyleRule接口，而CSSStyleRule反过来实现了CSSRule。CSSStyleSheet允许你检测与修改和它相关联的的样式表(style sheet)，包括样式表的规则列表。实际上，CSSStyleSheet也实现了更为通用的StyleSheet 接口。实现一个document的样式表的CSSStyleSheet列表可以过document.styleSheet属性获取(这个document通过外联样式表或内嵌的style元素定义样式)。
*/
  var exports = {
    /**
     * 实现了代表单个CSS样式表(CSS style sheet)的接口
     * @type {CSSStyleSheet}
     */
    CSSStyleSheet: 'cssStyleSheet',
    /**
     * 样式表中样式规则的集合，每个样式都是一个 CSSRule 的实例，可以通过位置信息被访问
     * @type {CSSRuleList}
     */
    CSSRuleList: 'cssRuleList',
    /**
     * 任意类型的样式规则（包含普通的规则和@规则）的一个抽象接口，，有一系列的实际类型的规则接口继承自这个上层接口，
这个接口有 7 个常量

     * @type {CSSRule}
     */
    CSSRule: 'cssRule',
    /**
     * 代表一条普通的规则
     * @type {CSSStyleRule}
     */
    CSSStyleRule: 'cssStyleRule',
    /**
     * 代表了CSS键值对的集合
     * @type {CSSStyleDeclaration}
     */
    CSSStyleDeclaration: 'cssStyleDeclaration'
  };

  return exports;
})
