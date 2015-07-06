/**
 * @module listStyle
 * @description 有一些兼容性问题如下
 - <strong class="iconfont bug"></strong>list-style-type为outside与overflow:hidden时，list-style-type会[消失](../../example/css/list-style/list-style-overflow-outside.html)
 - <strong class="iconfont bug"></strong>list-style-position:inside时，如果li下面第一个子元素为块元素，在IE FF中会将list-style-type单独作为一行，其余浏览器则会将块元素做为一行[点击查看](../../example/css/list-style/list-style-inside-with-first-block-children.html),可以将第一个块元素的display设置为inline-block
 */
module.exports = {
  /**
   * @default disc
   * @example
   * list-style-type: lower-alpha
   * @description li的列表样式
   - **list-style-type与overflow:hidden同时有时，在IE下会产生bug**[list-style-type与overflow](../../example/css/list-style/list-style-overflow.html)
   - 值有:
    - 固定的值 [实例](../../example/css/list-style/list-style-type-fixed-value.html)
      - disc
        - 浏览器支持：<strong class="iconfont browser" data-browser="all">所有浏览器</strong>
      - circle
        - 浏览器支持：<strong class="iconfont browser" data-browser="all">所有浏览器</strong>
      - square
        - 浏览器支持：<strong class="iconfont browser" data-browser="all">所有浏览器</strong>
      - decimal
        - 浏览器支持：<strong class="iconfont browser" data-browser="all">所有浏览器</strong>
      - dicimal-leading-zero
          - 浏览器支持：<strong class="iconfont browser" data-browser="ie" data-version="8+">IE</strong><strong class="iconfont browser" data-browser="chrome">chrome</strong><strong class="iconfont browser" data-browser="firefox">firefox</strong><strong class="iconfont browser" data-browser="safari">safari</strong><strong class="iconfont browser" data-browser="opera">safari</strong>
      - lower-roman
        - 浏览器支持：<strong class="iconfont browser" data-browser="all">所有浏览器</strong>
      - upper-roman
        - 浏览器支持：<strong class="iconfont browser" data-browser="all">所有浏览器</strong>
      - lower-greek
          - 浏览器支持：<strong class="iconfont browser" data-browser="ie" data-version="8+">IE</strong><strong class="iconfont browser" data-browser="chrome">chrome</strong><strong class="iconfont browser" data-browser="firefox">firefox</strong><strong class="iconfont browser" data-browser="safari">safari</strong><strong class="iconfont browser" data-browser="opera">safari</strong>
      - lower-latin
        - 浏览器支持：<strong class="iconfont browser" data-browser="ie" data-version="8+">IE</strong><strong class="iconfont browser" data-browser="chrome">chrome</strong><strong class="iconfont browser" data-browser="firefox">firefox</strong><strong class="iconfont browser" data-browser="safari">safari</strong><strong class="iconfont browser" data-browser="opera">safari</strong>
      - upper-latin
        - 浏览器支持：<strong class="iconfont browser" data-browser="ie" data-version="8+">IE</strong><strong class="iconfont browser" data-browser="chrome">chrome</strong><strong class="iconfont browser" data-browser="firefox">firefox</strong><strong class="iconfont browser" data-browser="safari">safari</strong><strong class="iconfont browser" data-browser="opera">safari</strong>
      - armenian
        - 浏览器支持：<strong class="iconfont browser" data-browser="ie" data-version="8+">IE</strong><strong class="iconfont browser" data-browser="chrome">chrome</strong><strong class="iconfont browser" data-browser="firefox">firefox</strong><strong class="iconfont browser" data-browser="safari">safari</strong><strong class="iconfont browser" data-browser="opera">safari</strong>
      - georgian
        - 浏览器支持：<strong class="iconfont browser" data-browser="ie" data-version="8+">IE</strong><strong class="iconfont browser" data-browser="chrome">chrome</strong><strong class="iconfont browser" data-browser="firefox">firefox</strong><strong class="iconfont browser" data-browser="safari">safari</strong><strong class="iconfont browser" data-browser="opera">safari</strong>
      - lower-alpha
        - 浏览器支持：<strong class="iconfont browser" data-browser="all">所有浏览器</strong>
      - upper-alpha
        - 浏览器支持：<strong class="iconfont browser" data-browser="all">所有浏览器</strong>
        - [利用alpha制作自动添加选项](../../example/css/list-style/list-style-type-alpha.html)
        - [利用content attr制作自动添加选项](../../example/css/list-style/list-style-type-content-attr.html)
      - none
        - 浏览器支持：<strong class="iconfont browser" data-browser="all">所有浏览器</strong>
    - 字符串，如list-style-type: '-'
          - 浏览器支持<strong class="iconfont browser" data-browser="firefox" data-version="39+">firefox</strong>
          - 实例 [type为'-'](../../example/css/list-style/list-style-type-string.html)
    - 继承值
      - inherit
      - initial
      - unset
   */
  'list-style-type': '',
  /**
   * @default none
   * @example
   * list-style-image: none
   * @description li列表样式的图片
   - 值有
    - 关键字 none
    - 地址 url
    - 全局值 inherit initial unset
   */
  'list-style-image':'',
  /**
   * @default outside
   * @example
   *   list-style-position: outside
   * @description li列表样式的位置
   - 值有
    - 关键字 inside outside
    - 全局值 inherit initial unset
   */
  'list-style-position':'',
  /**
   * list-style的复合属性
   */
  'list-style':'list-style-type list-style-position list-style-image'
}