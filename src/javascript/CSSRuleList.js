/**
 * @class
 * @classdesc 样式表中的集合，每个样式都是一个{@link CSSRule}
 */
function CSSRuleList(){}

/**
 *  样式表中包含的规则数量
 * @type {Number}
 */
CSSRuleList.length = 0

/**
 * 通过位置信息访问对应的某条规则
 * @param  {number} idx 位置
 * @return {string}     规则
 */
CSSRuleList.prototype.item = function(idx){}