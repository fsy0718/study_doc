define(function(){
  return function(e,cvs){
    var x = e.x || e.clientX;
    var y = e.y || e.clientY;
    var pos = cvs.getBoundingClientRect();
    return {
      x: x - pos.left*(cvs.width/pos.width),
      y: x - pos.top*(cvs.width/pos.height)
    }
  }
})