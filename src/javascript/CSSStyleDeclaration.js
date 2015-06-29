/**
 * @constructor
 * @description 可以通过 window.getComputedStyle 获取
 - 计算样式的属性是只读
 - 计算样式的值是绝对值【会将百分比和点之类相对的单位全部转换成绝对值】,所有指定尺寸的属性都会有一个以像素为度量单位的值,颜色的属性将会以 rgb 或 rgba 的格式返回
 - 不会计算符合属性，只基于最基础的属性
 - 计算样式的 cssText 属性未定义
 - 计算样式与 style 获取不同，[实例](../../example/javascript/CSSStyleDeclaration/getComputedStyle_style.html)
 */
function CSSStyleDeclaration(){}