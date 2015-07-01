/**
 * @module support
 * @desc 检测浏览器是否支持相关特性
 * @exports {Object} support
 */
define(function(){
  var support = {
    /**
     * 是否支持classList
     * @memberOf support
     * @return {boolean}     返回是否支持classList
     */
    classList : (function(){
      !!document.body.classList
    })(),
    w3cEvent: window.addEventListener
  }
  return support;
})