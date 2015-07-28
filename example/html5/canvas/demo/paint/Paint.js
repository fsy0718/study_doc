define(['./transformPosToWindow'],function(transformPosToWindow){
  var paintMap = {
    width: 700,
    height: 800
  };

  var _eventContext,mouseInfos = {},isDragging = false,imageData = [];

  var  initPaint = function(context){
    context.cvs.width = paintMap.width;
    context.cvs.height = paintMap.height;
  }

  var saveDrawingSurface = function(context,idx){
    context.putImageData(context.ctx.getImageData(0,0,paintMap.width,paintMap.height),idx);
  }

  var restoreDrawingSurface = function(context,idx){
    var data = context.getImageData(idx);
    context.ctx.putImageData(data,0,0);
  }

  var mousedownHandler = function(e){

    if(_eventContext){
      var pos = transformPosToWindow(e,_eventContext.cvs)
      mouseInfos.x = pos.x;
      mouseInfos.y = pos.y;
      isDragging = true;
      _eventContext.ctx.moveTo(mouseInfos.x,mouseInfos.y);
    }

  }

  var mousemoveHandler = function(e){
    if(_eventContext && isDragging){
      var pos  = transformPosToWindow(e,_eventContext.cvs);
      _eventContext.owner.draw(mouseInfos,pos);
    }

  }
  var mouseupHandler = function(e){

  }

  var initEvent = function(context){
    _eventContext = context;
    context.cvs.addEventListener('mousedown',mousedownHandler,false);
    context.cvs.addEventListener('mousemove',mousemoveHandler,false);
    context.cvs.addEventListener('mouseup',mouseupHandler,false);
  };
  var Paint = function(cvs,owner){
    this.owner = owner;
    this.cvs = cvs;
    this.ctx = cvs.getContext('2d');
    this.init();
  }
  Paint.prototype.init = function(){
    initPaint(this);
    initEvent(this);
  };

  Paint.prototype.getImageData = function(idx){
    return imageData[idx];
  }

  Paint.prototype.putImageData = function(data,idx){
    return imageData[idx] = data;
  }


  return Paint;
})