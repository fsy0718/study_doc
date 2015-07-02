/**
 * @module  attr
 * @description  用来获取选择到的元素的某一HTML属性值，并用于其样式。它也可以用于伪元素，属性值采用伪元素所依附的元素。
 */
module.exports = {
  /**
   * 返回css属性
   ###### 浏览器支持如下:
   <strong class="iconfont browser" data-browser="ie" data-version="9+">IE</strong><strong class="iconfont browser" data-browser="chrome">chrome</strong><strong class="iconfont browser" data-browser="firefox">firefox</strong><strong class="iconfont browser" data-browser="safari" data-version="3.1+">safari</strong><strong class="iconfont browser" data-browser="opera" data-version="9+">safari</strong>
   ###### 实例如下:
   - [基本展示](../../example/css3/attr/attr.html)
   - [利用attr做简单todo](../../example/css3/attr/attr_with_js.html)
   - [attr与font-face结合失败](../../example/css3/attr/attr_with_font_face.html) 返回的字符串不能用于font-face技术的content
   * @param  {string} attribute css引用的HTML属性名称
   * @param {string} [typeOrUnit=''] 表示所引用的属性值的单位。如果该单位相对于所引用的属性值不合法，那么attr()表达式也不合法。若省略，则默认值为string。其合法值[查看](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr) 目前全面支持的仅有string
   * @param  {string} [fallback]  如果HTML元素缺少所规定的属性值或属性值不合法，则使用fallback值。该值必须合法，且不能包含另一个attr()表达式。如果attr()不是所在CSS属性值的唯一值，其<fallback>值必须为<type-or-unit>所指定的类型，否则CSS会使用相应<type-or-unit>定义的默认值
   * @return {css}
   */
  attr: function(attribute,typeOrUnit,fallback){}
}