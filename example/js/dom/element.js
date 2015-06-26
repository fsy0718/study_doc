/**
 * @module HTMLElement
 * @require support
 */
define(['support'],function(support){
  if(window.HTMLElement){
    if(HTMLElement){
      /**
       * 为HTMLElement的原型扩展方法
       * @memberOf HTMLElement
       * @type {Function}
       */
      if(support.classList){
        HTMLElement.prototype.hasClass = function(classname){
          this.classList.contains(className);
        }
      }else{
        HTMLElement.prototype.hasClass = function(classname){
          var _className = this.className;
          var _classReg = new RegExp('\\b' + classname + '\\b');
          return _classReg.test(_className);
        }
      }
    }
  }
})