/**
 * @class
 * @classdesc 在canvas中，TextMetrics 接口表示文本的尺寸,除了width之外，其余属性只有chrome支持
*    - TextMetrics基本支持
  <table>
    <thead>
      <tr>
        <td>chrome</td><td>firefox</td><td>ie</td><td>opera</td><td>safari</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>4.0</td><td>1.5</td><td>9.0</td><td>9.0</td><td>3.1</td>
      </tr>
    </tbody>
  </table>
 */
function TextMetrics(){}

TextMetrics.prototype = {

  /**
   * @readonly
   * @type {Number}
   */
  width: 0,

  /**
   * @readonly
   * @type {Number}
   */
  actualBoundingBoxLeft: 0,

  /**
   * @readonly
   * @type {Number}
   */
  actualBoundingBoxRight: 0,

  /**
   * @readonly
   * @type {Number}
   */
  fontBoundingBoxAscent: 0,

  /**
   * @readonly
   * @type {Number}
   */
  fontBoundingBoxDescent: 0,

  /**
   * @readonly
   * @type {Number}
   */
  actualBoundingBoxAscent: 0,

  /**
   * @readonly
   * @type {Number}
   */
  actualBoundingBoxDescent: 0,

  /**
   * @readonly
   * @type {Number}
   */
  emHeightAscent: 0,

  /**
   * @readonly
   * @type {Number}
   */
  emHeightDescent: 0,

  /**
   * @readonly
   * @type {Number}
   */
  hangingBaseline: 0,

  /**
   * @readonly
   * @type {Number}
   */
  alphabeticBaseline: 0,

  /**
   * @readonly
   * @type {Number}
   */
  ideographicBaseline: 0
}