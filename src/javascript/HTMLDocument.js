/**
 * @class HTMLDocument
 * @extends {Document}
 */
function HTMLDocument(){}
/**
 * @inheritDoc
 */
HTMLDocument.prototype = {
  /**
   * 如果该页面处于用户不可见的状态,返回true,否则返回false.
   - **iframe页面的可见性与父页面相同.使用CSS隐藏或显示这个iframe并不会触发它的visibilitychange事件.**
   - **可以监听document上的visibilitychange事件**
   - 实例如下
    - [利用visibilitychange设置不同的title](../../example/javascript/Event/visibilitychange/visibilitychange-title.html)
   * @type {Boolean}
   */
  hidden: true,
  /**
   * 返回一个字符串,表明该页面的可见状态
   - visible : 页面内容至少部分可见.意味着该页面是一个非最小化窗口的前台标签页.
   - hidden : 页面内容用户不可见.意味着当前浏览器窗口处于最小化模式,或者该页面是一个后台标签页.
   - prerender : 页面内容正在被预渲染,用户不可见(这种情况下document.hidden会返回true). 一个页面只有在初始化时可能为这个值, 一旦变为其他两种值,不可能再变回来.
   - unloaded : 当前文档已经被卸载,用户不可见(这种情况下document.hidden会返回true).
   * @type {String}
   */
  visibilityState: ''
}