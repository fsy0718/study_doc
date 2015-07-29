define(['./transformPosToWindow'],function(transformPosToWindow){
  var paintMap = {
    width: 700,
    height: 800
  };

  var _eventContext,mouseInfos = {},isDragging = false;window.imageData = [];

  var isFunction = function(fn){
    return Object.prototype.toString.call(fn) === '[object Function]';
  }

  var  initPaint = function(context){
    context.cvs.width = paintMap.width;
    context.cvs.height = paintMap.height;
  }

  var saveDrawingSurface = function(context,idx){
    idx = idx || imageData.length;
    if(idx > 9){
      imageData.shift();
      idx = imageData.length;
    }
    context.setImageData(context.ctx.getImageData(0,0,paintMap.width,paintMap.height),idx);
  }

  var restoreDrawingSurface = function(context,idx){
    idx = +idx ? +idx : imageData.length - 1;
    if(idx >= imageData.length){
      idx = imageData.length - 1;
    }
    idx = idx ? (idx < 0 ? 0 : idx) : 0;
    var data = context.getImageData(idx);
    context.ctx.putImageData(data,0,0);
  }

  var mousedownHandler = function(e){
    e.preventDefault();
    if(_eventContext){
      var pos = transformPosToWindow(e,_eventContext.cvs)
      mouseInfos.x = pos.x;
      mouseInfos.y = pos.y;
      isDragging = true;
      saveDrawingSurface(_eventContext);
      isFunction(_eventContext.mousedownPaint) && _eventContext.mousedownPaint(pos,e,_eventContext);
    }

  }

  var mousemoveHandler = function(e){
    e.preventDefault();
    if(_eventContext && isDragging){
      var pos  = transformPosToWindow(e,_eventContext.cvs);
      restoreDrawingSurface(_eventContext);
      isFunction(_eventContext.mousemovePaint && _eventContext.mousemovePaint(pos,e,_eventContext));
      _eventContext.owner.draw(mouseInfos,pos);
    }

  }
  var mouseupHandler = function(e){
    e.preventDefault();
    if(_eventContext && isDragging){
      var pos = transformPosToWindow(e,_eventContext.cvs);
      var idx = imageData.length;
      saveDrawingSurface(_eventContext,idx-1);
      isDragging = false;
      _eventContext = null;
    }
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

  Paint.prototype.setImageData = function(data,idx){
    console.log(data,idx);
    return imageData[idx] = data;
  }


  return Paint;
})