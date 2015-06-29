/**
 * @module
 * @exports 将window上的坐标转换成canvas绘图环境中的坐标
 */
define(function(){
  function windowPositionTransToContextPosition(canvas,x,y){
    var clientRect = canvas.getBoundingClientRect();
    var context = canvas.getContext('2d');
    /*因为绘图环境可能会缩放，所以需要获取绘图环境与元素大小的比例*/
    return {
      x: x - clientRect.left * (canvas.width / clientRect.width),
      y: y - clientRect.top * (canvas.height / clientRect.height)
    }
  }
  return windowPositionTransToContextPosition

})