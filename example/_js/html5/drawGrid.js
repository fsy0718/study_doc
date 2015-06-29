/**
 * @module drawGrid
 * @exports {Function}     返回一个画网格的回调函数
 */
define(['tool/util'],function(util){
  /**
   * 回调函数
   * @param {HTMLElement} [canvas=context.canvas] canvas元素
   * @param {Object} context 绘图对象
   * @param {Object} [opt]     可选配置参数
   * @param {string} [opt.gapX=10] 竖网格之间的距离
   * @param {string} [opt.gapY=10] 横网格之间的距离
   * @param {string} [opt.color=rgb(0,0,200)] 网格的颜色
   * @param {number} [opt.alpha=0.1] 网格的透明度
   * @param {number} lineWidth 网格线的宽度
   * @return {HTMLElement}         返回canvas元素
   */
  return function(canvas,context,opt){
    if(arguments.length < 3){
      opt = arguments[1];
      context = arguments[0]
      canvas = context.canvas;
    }
    /**
     * @private
     * @var
     * @type {Object}
     */
    var _grid = {
      gapX: 10,
      gapY: 10,
      color: 'rgb(0,0,200)',
      alpha : 0.1,
      lineWidth: 0.5
    }

    /**
     * @mixins _grid
     * @type {Object}
     */
    _grid = Object.prototype.toString.call(opt) === '[object Object]' ? util.merge(_grid,opt,true) : _grid
    /**
     * 从0.5开始，可以画出真正意义上1px的线
     * @type {Number}
     */
    var x = 0.5,y = 0.5;
    var maxX = canvas.width,maxY = canvas.height;
    context.save();
    context.beginPath();
    context.strokeStyle = _grid.color;
    context.lineWidth = _grid.lineWidth;
    context.globalAlpha = _grid.alpha;
    while(x < maxX){
      x += _grid.gapX;
      context.moveTo(x,0);
      context.lineTo(x,maxY);
    }
    while(y < maxY){
      y += _grid.gapY;
      context.moveTo(0,y);
      context.lineTo(maxX,y);
    }
    context.stroke();
    context.restore();
    return canvas;
  }
})