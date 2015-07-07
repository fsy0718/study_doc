define(['../core'],function(Fsy){
  var class2type = {};
  var serialize = class2type.toString;
  var rword = /[^, ]+/g;
  'String Number Boolean RegExp Function Array Object Date Error'.replace(rword,function(name){
      class2type['[object ' + name + ']'] = name.toLowerCase();
  });

  function type(obj){
    if(obj == null){
      return String(obj);
    }
    return typeof obj === 'object' || typeof obj === 'function' ? class2type[serialize.call(obj)] || 'object' : typeof obj
  }


  /*IE 678 typeof alert object */
  Fsy.fn.isFunction = typeof alert === 'object' ? function(fn){
    try{
      return /^\s*\bfunction\b/.test(fn + '');
    }catch(e){
      return false;
    }
  } : function(fn){
    return serialize.call(fn) === '[object Function]'
  };


  ['String','Number','Array','Date','Object']


})