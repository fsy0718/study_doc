define(function(){
  /**
   * @module  textShadow
   * @description 兼容性如图
   - ![text-shadow兼容性](../dest/image/text-shadow.png)
   - 不需要写任何前缀
   - IE9 可以用canvas中的shadow[offsetX,offsetY,blur不能为0]、filter:shadow滤镜 filter:dropshadow
     - E{filter:shadow(Color=颜色值,Direction=数值,Strength=数值)}
     - [canvas中的shadow](../html5/canvas/CanvasRenderingContext2D.html#shadowColor)
   - 实例：
     - [发光效果](../../example/css3/text-shadow/glow.html)
     - [发光效果canvas效果](../../example/css3/text-shadow/glow_IE9_canvas_shadow.html)
   */



  var exports = {
    /**
   * css3文字阴影，有两种写法，可以按照规则连写
   * @param  {string} color   阴影的颜色
   * @param  {string} offsetX 阴影的x轴偏移量
   * @param  {string} offsetY 阴影的Y轴偏移量
   * @param  {string} blur    模糊半径
   * @example
   *  text-shadow: rgba(0,123,6,0.5) 5px 5px 5px,rbga(0,123,6,0.1) 10px 10px 3px [,...]
   *  text-shadow: 5px 5px 5px rgba(0,123,6,0.5), 10px 10px 3px rgba(0,123,6,.1) [,...]
   *  text-shadow: none
   */
    textShadow1: function(color,offsetX,offsetY,blur/*[...]*/){},
    /**
     * 参考[textShadow1](#textShadow1)
     */
    textShadow2: function(offsetX,offsetY,blur,color/*[...]*/){},
    /**
     * 可以直接写为none
     * @property {string} none 无文字阴影
     */
    textShadow3: 'none'
  };
  return exports;
});