define(function(){
  var paintMap = {
    width: 700,
    height: 800
  };

  var _eventContext,mouseInfos = {},isDragging = false;

  var  initPaint = function(context){
    context.cvs.width = paintMap.width;
    context.cvs.height = paintMap.height;
  }

  var mousedownHandler = function(e){
    console.log(e);
  }

  var mousemoveHandler = function(e){
    console.log(e);
    console.log(_eventContext);
  }
    var mouseupHandler = function(e){
    console.log(e);
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


  return Paint;
})