/**
 * @kind file
 * @desc canvas元素的相关属性及方法，[MDN文档]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement}
 * @author fsy0718 <fsy_study@yeah.net>
 */
/**
 * @inner
 * @callback callToBlob
 * @desc canvas.toBlob的回调函数
 * @param  {Blob} blob blob对象
 */
function callback(blob){}


/**
 *
 * @class HTMLCanvasElement
 * @classdesc canvas元素
 ---
   - 2D绘图环境支持情况
    <table>
      <thead>
        <tr>
          <td>chrome</td><td>firefox</td><td>ie</td><td>opera</td><td>safari</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4.0</td><td>3.6</td><td>9.0</td><td>9.0</td><td>3.1</td>
        </tr>
      </tbody>
    </table>
---
 */

 function HTMLCanvasElement(){}

/**
 * canvas绘图表面的宽度，如果css未重置canvas元素的宽度，与绘图表面与canvas宽度一致，如果css重置元素的宽度，则绘图表面会进行缩放，从而使绘图变形
 * @static
 * @type {number}
 * @default 300
 * @example
 *  canvas.width = 600
 */
 HTMLCanvasElement.prototype.width = 300

/**
 * @description canvas 绘图表面的高度
   - [点击查看css重置canvas元素大小导致变形实例](../../../example/html5/canvas/HTMLCanvasElement/width.html "css重置canvas元素大小导致变形")
   - [鼠标位置转换成canvas坐标](../../../example/html5/canvas/HTMLCanvasElement/transformPosition.html)
 * @type {number}
 * @default  300
 * @see [width]{@link HTMLCanvasElement#width}
 */
 HTMLCanvasElement.prototype.height = 300


/**
 * @param {string} a 想获取的绘图环境,值为2d
 * @return {CanvasRenderingContext2D} 返回元素相关的绘图环境对象
 * @example
 *   canvas.getContext('2d')
 */

HTMLCanvasElement.prototype.getContext = function(a){},
/**
 * 返回一个数据地址，可以将它设定为img的src属性
   - [运用 toDataURL 生成的离屏钟表](../../../example/html5/canvas/HTMLCanvasElement/clock.html)
 * @param  {string} [type=image/png]    图像的类型 [option:image/png | image/jpeg] chrome还可以选择 "image/webp"
 * @param  {number} [quality] 表示jpeg图像的质量 值在0~1之间
 * @return {string}   1.如果canvas的宽或高为0，则返回"data:,"
 * @return {string}   2.一个以data:image/png;base64或data:image/jpeg;base64或[data:image/webp;base64 *chrome*]开头的字符串
 * @example
 *   canvas.toDataURL();
 */
 HTMLCanvasElement.prototype.toDataURL= function(type,quality){},
/**
 * 创建一个用于表示此canvas元素图像文件的Blob
 * @param  {callToBlob} callback [description]
 * @param  {string}   [type=image/png] @see {@link getContext#type}
 * @param  {*}   args     最后一个参数为0~1的值 @see {@link getContext#quality}
 * @return undefined
 */
 HTMLCanvasElement.prototype.toBlob=  function(callback,type,args/*其他参数*/){}


