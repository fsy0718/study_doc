define(['support'],function(support){
  var event = {};
  event.on = function(ele,type,fn){
    if(support.w3cEvent){
      ele.addEventListener(type,fn,false);
    }else{
      ele.attachEvent('on' + type,fn);
    }
  }
  event.off = function(ele,type,fn){
    if(support.w3cEvent){
      ele.removeEventListener(type,fn);
    }else{
      ele.detachEvent('on' + type,fn);
    }
  }
  return event;

})