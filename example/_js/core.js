define(['./var/slice'],function(slice){
  var version = '0.0.1';

  var Fsy = function(selector,context){
    return new Fsy.fn.init();
  }

  Fsy.fn = Fsy.prototype = {
    version: version,
    fsy: version,
  }

  Fsy.extend = Fsy.fn.extend = function(override,target,source){
    var len = arguments.length,_arg = arguments;
    if(len){
      if(typeof arguments[0] !== 'boolean'){
        override = false;
        _arg = slice.call(arguments,1);
      }
      if(_arg.length){

      }
    }else{
      return this;
    }
  }



  Fsy.fn.init = function(selector,context){
    this.ele = selector;
  }


  Fsy.fn.init.prototype = Fsy.fn

})