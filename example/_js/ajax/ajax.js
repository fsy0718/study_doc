define(['tool/type','tool/util'],function(_type,util){
  var defaultOpt = {
    type: 'POST',
    dataType: 'json'
  }
  console.log(_type.isObject)
  var ajax = function(opt){
    var conf = util.clone(defaultOpt);
    if(_type.isObject(opt)){
      conf = util.merge(conf,opt,true);
    }
    var request = new XMLHttpRequest();
    if(conf.url){
      conf.type = conf.type.toUpperCase();
      request.open(conf.type,conf.url);
      request.setRequestHeader('Context-type','text/plain');
      request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
          var type = request.getResponseHeader('Context-Type');
          conf.success(request.responseText,request.statusText,request);
        }
      }
      if(conf.type === 'POST'){
        request.send(conf.data);
      }else{
        request.send(null);
      }
    }
  }
  return ajax;
})