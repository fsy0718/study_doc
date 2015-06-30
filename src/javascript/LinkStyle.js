/**
 * @class 提供一种从<link>，<style>节点获取样式表的方式。LinkStyle 的实例可以从 HTMLLinkElement，HTMLStyleElement(或 ProcessingInstruction)中获得。LinkStyle 接口只有一个属性就是 sheet，这个属性存储从节点获得的 StyleSheet 实例
 */
function LinkStyle(){}
/**
 * 获取节点上的StyleSheet实例
 * @type {StyleSheet}
 */
LinkStyle.sheet = 'StyleSheet'