define(function(){
  var brushMap,iconLen,parseIconMap,drawIconBox,drawIconBoxs,lastCheckedInfos,clearLastCheckIcon,checkIcon,brushMethods,emitter;
  brushMap = {
    width:  100,
    height: 800,
    iconWidth: 60,
    iconHeight: 60,
    iconGap: 15,
    icons:['line','rectangle','circle','closedCurve','unClosedCurve','baseLine','text','circles','ease'],
    iconTopStart: 15,
    iconPadding: 15,
    strokeColor: 'rgba(0,0,0,1)',
    checkedIdx: 1,
    shadowOffsetY: 5,
    shadowOffsetX: 5
  };

  iconLen = brushMap.icons.length;

  //计算icons的配置
  parseIconMap = function(idx){
    if(+idx){
      idx = +idx;
      if(idx < 0){
        idx = iconLen + idx;
      }else if(idx >= iconLen){
        idx = 0;
      }
    }else{
      idx = 0;
    }
    return  {
      left: (brushMap.width - brushMap.iconWidth) / 2,
      top: brushMap.iconTopStart + idx * (brushMap.iconHeight + brushMap.iconGap),
      width: brushMap.iconWidth,
      height: brushMap.iconHeight,
      drawLeft: (brushMap.width - brushMap.iconWidth) / 2 + brushMap.iconPadding,
      drawTop: brushMap.iconTopStart + idx * (brushMap.iconHeight + brushMap.iconGap) + brushMap.iconPadding,
      drawWidth:  brushMap.iconWidth - brushMap.iconPadding * 2 ,
      drawHeight: brushMap.iconHeight - brushMap.iconPadding * 2
    };

  }

  /**
   * Todo 此处直接改变了brushMap的defaultChecked是不对的，需要extend一个配置对象
   */
  clearLastCheckIcon = function(context){
    var conf = parseIconMap(brushMap.checkedIdx - 1);
    context.ctx.clearRect(0,conf.top - brushMap.iconGap + 1,brushMap.width,brushMap.iconHeight + brushMap.iconGap * 2 - 2)
    drawIconBox(conf,context,false);
  }

  checkIcon = function(context){
    var conf = parseIconMap(brushMap.checkedIdx - 1);
    drawIconBox(conf,context,true);
  }

  emitter = function(context){
    checkedInfo = context.getCheckedIconInfos();
    context.owner.currentMethodName = checkedInfo.name;
    context.owner.currentMethodFn = checkedInfo.method;
  }


  //画icon的盒子
  drawIconBox = function(iconOpt,context,checked){
    context.ctx.moveTo(iconOpt.left,iconOpt.top);

    if(checked){

      context.ctx.shadowOffsetX = brushMap.shadowOffsetX;
      context.ctx.shadowOffsetY = brushMap.shadowOffsetY;
      context.ctx.shadowColor = 'rgba(0,0,0,1)';
      context.ctx.shadowBlur = 5;
    }else{
      context.ctx.shadowBlur = 0;
      context.ctx.shadowOffsetX = 0;
      context.ctx.shadowOffsetY = 0;
    }

    context.ctx.strokeRect(iconOpt.left,iconOpt.top,iconOpt.width,iconOpt.height);
  }

  drawIconBtn = function(idx,iconOpt,context){
    var iconName = brushMap.icons[idx];
    context.ctx.strokeColor = 'rgba(0,0,0,0.4)';
    if(brushMethods[iconName]){
      brushMethods[iconName].apply(context,[{x:iconOpt.drawLeft,y:iconOpt.drawTop},{x:iconOpt.drawLeft + iconOpt.drawWidth,y:iconOpt.drawTop + iconOpt.drawHeight}]);
      context.ctx.stroke();
      context.brushs[iconName] = function(start,end){
        brushMethods[iconName].apply(context,arguments);
      }
    }
  }

  drawIcons = function(context){
    context.ctx.save();
    context.ctx.globalAlpha = 0.6;
    brushMap.icons.forEach(function(icon,i){
      var iconOpt = parseIconMap(i);
      context.ctx.save();
      drawIconBox(iconOpt,context,i === brushMap.checkedIdx - 1);
      context.ctx.restore();
      context.ctx.save();
      drawIconBtn(i,iconOpt,context);
      context.ctx.restore();
    })
    context.ctx.restore();
  }

  brushMethods = {
    'line': function(start,end){

      this.ctx.moveTo(start.x,start.y);
      this.ctx.lineTo(end.x,end.y);

    },
    'rectangle':function(start,end){
      this.ctx.moveTo(start.x,start.y);
      this.ctx.strokeRect(start.x,start.y,Math.abs(end.x-start.x),Math.abs(end.y-start.y));
    }
  }

  var Brush = function(cvs,owner){
    this.owner = owner;
    this.cvs = cvs;
    this.ctx = cvs.getContext('2d');
    this.brushs = {};
    this.init();
  };




  Brush.prototype.checkIcon = function(idx){
    var checkedInfo;
    if(idx !== brushMap.checkedIdx){
      clearLastCheckIcon(this);
      brushMap.checkedIdx = idx;
      checkIcon(this);
      checkedInfo = this.getCheckedIconInfos();
      emitter(this);
    }
  }

  Brush.prototype.init = function(){
    this.cvs.width = brushMap.width;
    this.cvs.height = brushMap.height;
    this.ctx.strokeColor = brushMap.strokeColor;
    drawIcons(this);
    emitter(this);
  }

  Brush.prototype.getCheckedIconInfos = function(){
    return {
      idx: brushMap.checkedIdx,
      name: brushMap.icons[brushMap.checkedIdx - 1],
      method: this.brushs[brushMap.icons[brushMap.checkedIdx - 1]]
    }
  }

  Brush.prototype.addIcon = function(name,call){

  }

  Brush.prototype.removeIcon = function(name){

  }
  return Brush;
})