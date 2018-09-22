<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1707/57/5729585581b6732fa3.water.jpg_200x200_85298361.jpg">
        <div class="item-info">
          <p class="item-title">大连森林动物园</p>
          <p class="item-desc">与动物嬉戏，共享和谐人生</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1707/57/5729585581b6732fa3.water.jpg_200x200_85298361.jpg">
        <div class="item-info">
          <p class="item-title">大连森林动物园</p>
          <p class="item-desc">与动物嬉戏，共享和谐人生</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'HomeRecommend'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    background #eee
    line-height .8rem
    padding-left .2rem
  .item
    display flex
    height 1.9rem
    .item-img
      height 1.7rem
      width 1.7rem
      padding .1rem
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
      .item-button
        line-height .45rem
        margin-top .15rem
        padding 0 .2rem
        background-color #ff9300
        color #fff
        border-radius .07rem
</style>
