/**
 * @class
 * @classdesc 表示描述渐变的不透明对象
 */
function CanvasGradient(){}

CanvasGradient.prototype = {
  /**
   * 添加一个由偏移值和颜色值指定的断点到渐变
   * @param {number} offset 0~1的值，超出范围抛出INDEX_SIZE_ERR错误
   * @param {string} color  颜色值
   */
  addColorStop: function(offset,color){}
}