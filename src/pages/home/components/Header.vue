<template>
  <div>
    <div class="header">
      <div class="header-left"><div class="iconfont icon-back">&#xe628;</div></div>
      <div class="header-input"><span class="iconfont">&#xe648;</span>请输入游玩景点</div>
      <router-link to="/city">
      <div class="header-right">城市<span class="iconfont icon-attr">&#xe662;</span></div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
/*在css中使用别名时前面要加~*/
@import '~styles/varibles.styl'
  .header
    /* 1rem 等于 50px */
    height .86rem
    background-color $bg_color
    color #fff
    display flex
    line-height .86rem
    .header-left
      width .64rem
      .icon-back
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      border-radius .1rem
      background-color #fff
      color #ccc
      padding-left .2rem
    .header-right
      width 1.24rem
      text-align center
      .icon-attr
        font-size .24rem
</style>
