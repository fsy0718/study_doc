/**
 * @class
 * @classdesc Node文件模块对象
 * @param {string} id     模块标识
 * @param {object} parent 父模块
 */
function Module(id,parent){
  /**
   * id
   * @type {string}
   * @memberOf Module
   */
  this.id = id;
  /**
   * 父模块,如果当前模块被谁引用过，那么parent就是那个模块 [实例](../../example/node/test_module/aho.js)
   * @type {Object}
   * @memberOf Module
   */
  this.parent = parent;
  /**
   * 对外接口
   * @type {Object}
   * @memberOf Module
   */
  this.exports = {};
  if(parent && parent.children){
    parent.children.push(this);
  }
  /**
   * 文件名
   * @type {String}
   * @memberOf Module
   */
  this.filename = null;
  /**
   * 是否已经加载过
   * @type {Boolean}
   * @memberOf Module
   */
  this.loaded = false;
  /**
   * 子模块
   * @type {Array}
   * @memberOf Module
   */
  this.children = [];

}