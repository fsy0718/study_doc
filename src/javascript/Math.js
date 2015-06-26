define(function(){
  /**
* @module Math
*/
var exports = {
  /**
   * @property {number} 返回算术常量 e，即自然对数的底数（约等于2.718）
   * @const
   */
   E: 2.718281828459045,
  /**
   * @property {number} 返回 2 的自然对数（约等于0.693）
   * @const
   */
   LN2: 0.693,
  /**
   * @property {number} 返回 10 的自然对数（约等于2.302）
   * @const
   */
   LN10: 2.303,
  /**
   * @property {number} 返回以 2 为底的 e 的对数（约等于 1.414）
   * @const
   */
   LOG2E: 1.443,
  /**
   * @property {number} 返回以 10 为底的 e 的对数（约等于0.434）
   * @const
   */
   LOG10E: 0.434,
  /**
   * @property {number} 返回圆周率（约等于3.14159）
   * @const
   */
   PI: 3.14159,
  /**
   * @property {number} 返回返回 2 的平方根的倒数（约等于 0.707）
   * @const
   */
   SQRT1_2: 0.707,
  /**
   * @property {number} 返回 2 的平方根（约等于 1.414）
   * @const
   */
   SQRT2: 1.414,

  /**
   * 返回x的绝对值.
   * @method
   * @param  {number} x
   * @return {number}
   */
   abs: function(x){},

  /**
   * 返回x的反余弦值（单位为弧度）.
   * @param  {number} x -1.0~1.0之间的数
   * @return {number}   0到 Math.PI 之间的弧度值,如果x小于 -1 或大于 1 的值，返回 NaN。
   */
   acos: function(x){},

  /**
   * 返回x的反正弦值（单位为弧度）.
   * @param  {number} x -1~1之间的值
   * @return {number}   - π/2到π/2弧度的数值,如果x小于 -1 或大于 1 的值，返回 NaN。
   */
   asin: function(x){},

  /**
   * 返回 x 的反正切值（单位为弧度）.
   * @param  {number} x
   * @return {number}    返回一个 -π/2 到 π/2 弧度之间的数值
   */
   atan: function(x){},

  /**
   * 返回 y/x 的反正切值.
   * @param  {number} x
   * @param  {number} y
   * @return {number}   返回一个 -Math.PI 到 Math.PI 之间的数值，表示点 (x, y) 对应的偏移角度。这是一个逆时针角度，以弧度为单位，正X轴和点 (x, y) 与原点连线 之间。注意此函数接受的参数：先传递 y 坐标，然后是 x 坐标。
   */
   atan2: function(x, y){},

  /**
   * 返回x向上取整后的值.
   * @param  {number} x
   * @return {number}
   */
   ceil: function(x){},

  /**
   * 返回x的余弦值.
   * @param  {number} x 以弧度为单位的数值
   * @return {number}   一个 -1 到 1 之间的数值，表示角度（单位：弧度）的余弦值
   */
   cos: function(x){},


  /**
   * 返回 E<sup>x</sup>, 当x为参数,  E 是欧拉常数 (2.718...), 自然对数的底.
   * @param  {number} x
   * @return {number}
   */
   exp: function(x){},

  /**
   * 返回小于x的最大整数。
   * @param  {number} x
   * @return {number}
   */
   floor: function(x){},

  /**
   * 返回数的自然对数（底为e）
   * @param  {number} x
   * @returns {number}
     |大于0小于Infinity的值 | 0   |  Infinity  | 负值 |
     | --------   | -----:  | ----:  | :----:|
     |  自然对数    | -Infinity |   Infinity     | NaN |
   */
   log: function(x){},

  /**
   * 返回0个到多个数值中最大值.
   * @param  {*} [x] 任意参数或者无参数
   * @return {number}
     |无参数 | 参数全部转为数值   |  参数中有任一参数不能转成数值  |
     | --------   | -----:  | :----:  |
     |  -Infinity    | 最大值 |   NaN     |
   */
   max: function(x){},

  /**
   * 返回0个到多个数值中最小值.
   * @param  {*} [x] 任意参数或者无参数
   * @return {number}
     |无参数 | 参数全部转为数值   |  参数中有任一参数不能转成数值  |
     | --------   | -----:  | :----:  |
     |  Infinity    | 最小值 |   NaN     |
   */
   min :function(x){},

  /**
   * 返回x的y次幂.
   * @param  {number} x 基数
   * @param  {number} y 指数
   * @return {number}
   */
   pow: function(x,y){},

  /**
   *  函数返回 [0-1) 的浮点值伪随机数
   * @return {number}
   */
   random: function(){},

  /**
   * 返回四舍五入后的整数.
   * @param  {number} x
   * @return {number}   Int
   */
   round: function(x){},

  /**
   * 返回正弦值.
   * @param  {number} x 一个数值（以弧度为单位）
   * @return {number}   一个 -1 到 1 之间的数值，表示给定角度（单位：弧度）的正弦值
   */
   sin: function(x){},

  /**
   * 返回x的平方根.
   * @method sqrt
   * @param  {number} x
   * @return {number}   x的平方根，如果x为负值，则返回NaN
   */
   sqrt: function(x){},

  /**
   * 返回x的正切值.
   * @param  {number} x 以弧度为单位的数值
   * @return {number}
   */
   tan: function(x){}
  };
  return exports;
})


