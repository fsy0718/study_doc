define(['./Brush','./Paint'],function(Brush,Paint){
  /**
   * TODO 需要加入自定义参数 和extend方法
   */


  var CanvasBoard = function(container){
    this.container = container;
    this.init()
  }

  CanvasBoard.prototype.init = function(){
    var paintCvs = this.container.querySelector('.cvs-paint');
    var brushCvs = this.container.querySelector('.cvs-brush');
    var self = this;
    this.paint = new Paint(paintCvs,this);
    this.brush = new Brush(brushCvs,this);
  }

  CanvasBoard.prototype.draw = function(start,end){
    var self = this;
    if(self.currentMethodFn){
      self.paint.ctx.save();
      self.currentMethodFn(start,end,self.paint);
      self.paint.ctx.stroke();
      self.paint.ctx.restore();
    }
  }




  return CanvasBoard;
})