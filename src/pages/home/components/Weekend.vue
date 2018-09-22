<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" src="http://img1.qunarzz.com/sight/source/1505/b7/8a08a1023062b3.jpg_r_640x214_d7cb475c.jpg">
        </div>
        <div class="item-info">
          <p class="item-title">最赞的海滨浴场</p>
          <p class="item-desc">跳进海里，享受铺天盖地的清凉吧</p>
        </div>
      </li>
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" src="http://img1.qunarzz.com/sight/source/1505/b7/8a08a1023062b3.jpg_r_640x214_d7cb475c.jpg">
        </div>
        <div class="item-info">
          <p class="item-title">最赞的海滨浴场</p>
          <p class="item-desc">跳进海里，享受铺天盖地的清凉吧</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'HomeWeekend'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    background #eee
    line-height .8rem
    padding-left .2rem
    margin-bottom .1rem
  .item-img-wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 37.1%
    .item-img
      width 100%
  .item-info
    padding .1rem
    flex 1
    /*加下面这行才能使ellipsis省略号显示生效*/
    min-width 0
    .item-title
      line-height .5rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      font-size .2rem
      color: #ccc
      ellipsis()
</style>
