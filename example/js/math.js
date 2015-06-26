define(function(){
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number}      The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }


  /**
   * @borrows decimalAdjust as round10
   * @borrows decimalAdjust as floor10
   * @borrows decimalAdjust as ceil10
   */
  var MathExpand = {
    /**
     * 返回一个指定区域内的整数
     * @param  {*} [min=0]
     * @param  {*} [max=1]
     * @return {number}
     */
    randomInt: function(min,max){
      if(!max){
        max = min;
        min = 0
      }
      var _max = Math.max(min,max) || 1;
      var _min = Math.min(min,max) || 0;
      return Math.floor(Math.random()*(_max - _min + 1) + _min);
    },
    round10: function(value,exp){
      return decimalAdjust('round',value,exp)
    },
    floor10: function(value,exp){
      return decimalAdjust('floor',value,exp)
    },
    ceil10: function(value,exp){
      return decimalAdjust('ceil',value,exp)
    }
  }

  return MathExpand;
})



