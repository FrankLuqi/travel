<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgurl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1809/23/d3eba6afb797dd02.jpg_750x200_a72410ba.jpg'
      }, {
        id: '0002',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1809/2d/0d7dc3400a50b502.jpg_750x200_4ca95dd4.jpg'
      }, {
        id: '0003',
        imgurl: 'http://img1.qunarzz.com/piao/fusion/1809/ff/41f33ad2b8a1bd02.jpg_750x200_72925c02.jpg'
      }
      ]
    }
  },
  methods: {
    callback: function () {
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper>>> .swiper-pagination-bullet-active
    background #fff
    /*由于scoped使得style中的样式只针对template中的代码，通过>>>可以实现穿透*/
  .wrapper
    /*为了防止在轮播图加载成功前后下面的元素产生抖动，设置如下*/
    height 0
    width 100%
    overflow hidden
    padding-bottom 26.7%
    .swiper-img
      width:100%
</style>
