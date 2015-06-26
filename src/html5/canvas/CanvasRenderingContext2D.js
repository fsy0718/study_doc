/**
 * @kind file
 * @desc CanvasRenderingContext2D相关属性及方法，[MDN文档]{https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D "CanvasRenderingContext2D文档"}
 * @author fsy0718 <fsy_study@yeah.net>
 */

/**
 * @inheritdoc
 * @class  CanvasRenderingContext2D
 * @classdesc canvas绘图环境构造函数
 */
function CanvasRenderingContext2D(){}

CanvasRenderingContext2D.prototype = {
  /**
   * @function
   * @description 设置指定矩形区域内（以点 (x, y) 为起点，范围是(width, height)）所有像素变成透明，并擦除之前绘制的所有内容的方法
   * @param  {number} x 起点的X坐标
   * @param  {number} y 起点的Y坐标
   * @param  {number} w 区域的宽度
   * @param  {number} h 区域的高度
   */
  clearRect: function(x,y,w,h){},

  /**
   * @function
   * @description 设置指定矩形区域内（以点 (x, y) 为起点，范围是(width, height)）进行填充  **fillRect方法自动调用context.beginPath新建子路径**
   * @param  {number} x 起点的X坐标
   * @param  {number} y 起点的Y坐标
   * @param  {number} w 区域的宽度
   * @param  {number} h 区域的高度
   */
  fillRect:function(x,y,w,h){},

  /**
   * @function
   * @description 设置指定矩形区域内（以点 (x, y) 为起点，范围是(width, height)）进行描边  **strokeRect方法自动调用context.beginPath新建子路径**
   * @param  {number} x 起点的X坐标
   * @param  {number} y 起点的Y坐标
   * @param  {number} w 区域的宽度
   * @param  {number} h 区域的高度
   */
  strokeRect: function(x,y,w,h){},

  /**
   * 阴影的颜色
   * @default fully-transparent black
   * @type {String}
   */
  shadowColor: 'rgba(0,0,0,0.1)',

  /**
   * 阴影X轴上的偏移量
   * @default 0
   * @type {Number}
   */
  shadowOffsetX: 0,

  /**
   * 阴影Y轴上的偏移量
   * @default 0
   * @type {Number}
   */
  shadowOffsetY: 0,

  /**
   * 阴影模糊效果
   * @default 0
   * @type {Number}
   */
  shadowBlur: 0,

  /**
   * 在(x,y)位置处填充文本，文本属性与font textAlign textBaseline direction值有关
   * @param  {string} text 文本
   * @param  {number} x    文本起点的X坐标
   * @param  {number} y    文本起点的Y坐标
   * @param  {number} [maxWidth]    绘制的最大宽度
   */
  fillText: function(text,x,y,maxWidth){},

  /**
   * 在(x,y)位置处绘制文本，文本属性与font textAlign textBaseline direction值有关
   * @param  {string} text 文本
   * @param  {number} x    文本起点的X坐标
   * @param  {number} y    文本起点的Y坐标
   * @param  {number} [maxWidth]    绘制的最大宽度
   */
  strokeText: function(text,x,y,maxWidth){},

  /**
   * 返回一个包含文本尺寸的信息
   * @param  {string} text 需要测试的文本
   * @return {TextMetrics}      返回一个TextMetrics对象
   */
  measureText: function(text){},

  /**
   * 创建一个沿参数坐标指定的直线的渐变
   * @param  {number} x1 起点X坐标
   * @param  {number} y1 起点Y坐标
   * @param  {number} x2 终点X坐标
   * @param  {number} y2 终点Y坐标
   * @return {CanvasGradient}  返回一个CanvasGradient对象
   */
  createLinearGradient: function(x1,y1,x2,y2){},

  /**
   * 根据参数确定两个圆的坐标，绘制放射性渐变的方法
   * @param  {number} x1 起点X坐标
   * @param  {number} y1 起点Y坐标
   * @param  {number} r1 开始圆的半径
   * @param  {number} x2 终点X坐标
   * @param  {number} y2 终点Y坐标
   * @param  {number} r2 结束圆的半径
   * @return {CanvasGradient}  返回一个CanvasGradient对象
   */
  createRadialGradient: function(x1,y1,r1,x2,y2,r2){},

  /**
   * 使用指定的图像 (CanvasImageSource)创建模式的方法。 它通过repetition参数在指定的方向上重复元图像
   * @param  {HTMLImageElement|HTMLVideoElement|HTMLCanvasElement} image      重复元图像
   * @param  {string} repetition 重复元图像的方式
   * @return {CanvasPattern}            CanvasPattern对象
   */

  createPattern: function(image,repetition){},

  /**
   * Canvas 2D API 通过将当前状态放入栈中，保存 canvas 全部状态的方法，状态包含以下方面：
  - 当前的变换矩阵
  - 当前的剪切区域
  - 当前的虚线列表
  - 以下属性当前的值
   - strokeStyle
   - fillStyle
   - globalAlpha
   - lineWidth
   - lineCap
   - lineJoin
   - miterLimit
   - lineDashOffset
   - shadowOffsetX
   - shadowOffsetY
   - shadowBlur
   - shadowColor
   - globalCompositeOperation
   - font
   - textAlign
   - textBaseline
   - direction
   - imageSmoothingEnabled
   */
  save: function(){},

  /**
   * 通过在绘图状态栈中弹出顶端的状态，将 canvas 恢复到最近的保存状态的方法。 如果没有保存状态，此方法不做任何改变
   * @see  CanvasRenderingContext2D#save
   */
  restore: function(){},

  /**
   * 是 HTMLCanvasElement的反向引用。如果没有canvas元素与之对应，对象值为null
   * @readOnly
   * @type {HTMLCanvasElement}
   */
  canvas: 'canvas',

  /**
   * 图形内部的颜色和样式
   * @default  '#000'
   * @type {string}
   */
  fillStyle: '#000',

  /**
   * 图形外线的颜色和样式
   * @default '#000'
   * @type {string}
   */
  strokeStyle: '#000',

  /**
   * 线的宽度，当获取属性值时，它可以返回当前的值（默认值是1.0 ）。 当给属性赋值时， 0、 负数、 Infinity 和 NaN 都会被忽略；除此之外，都会被赋予一个新值。
   * @default 1.0
   * @type {Number}
   */
  lineWidth: 1.0,

  /**
   * 绘制每一条线段末端的属性，[ 'butt' | round | square]
   * @default 'butt'
   * @type {String}
   */
  lineGap: 'butt',

  /**
   * 用来设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略） ['miter' | 'round' | 'bevel']
   * @default 'miter'
   * @type {String}
   */
  lineJoin: 'miter',

  /**
   * 设置斜接面限制比例的属性。 当获取属性值时， 会返回当前的值（默认值是10.0 ）。当给属性赋值时， 0、负数、 Infinity 和 NaN 都会被忽略；除此之外都会被赋予一个新值。
   * @default 10
   * @type {Number}
   */
  miterLimit: 10,

  /**
   * 获取当前线段样式的方法
   * @return {Array} 一组描述交替绘制线段和间距（坐标空间单位）长度的数字
   */
  getLineDash: function(){},

  /**
   *  设置虚线样式的方法
   * @param {Array} array 一组描述交替绘制线段和间距（坐标空间单位）长度的数字。 如果数组元素的数量是奇数， 数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]
   */
  setLineDash: function(array){},

  /**
   * 设置虚线偏移量的属性
   * @default 0.0
   * @type {Number}
   */
  lineDashOffset: 0.0

}
