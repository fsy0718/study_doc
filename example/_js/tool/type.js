define(function(){
  var types = ['String','Number','Boolean','Object','Function'];
  var objectToString = Object.prototype.toString;
  var reg = /\[object (\w+)\]/
  function _type(param){
    var _typeof = objectToString.call(param)
    var components = _typeof.match(reg);
    return components && components[1];
  }

  var type = {},len = types.length,i = 0;
  while(i < len){
    (function(i){
      var __type = types[i];
      type['is' + __type]  = function(param){
        return _type(param) === __type;
      }
    })(i)

    i++;
  }


  type.isArray = type.isFunction(Array.isArray) ? function(param){
    return Array.isArray(param);
  } : function(param){
    return objectToString.call(param) === '[object Array]';
  }
  return type;

})