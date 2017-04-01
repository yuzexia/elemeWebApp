<template>
  <div class="header">
    <!--header的信息部分-->
    <div class="content-wrapper">
      <!--header logo 部分-->
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-account" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!--header的公告部分-->
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!--header 模糊的背景图片-->
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <!--浮层-->
    <!--css sticky footer布局-->
    <!--添加transition="fade" 增加动画-->
    <div v-show="detailShow" class="detail" transition="fade">
      <!--真正承载内容的容器-->
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <div class="name">{{seller.name}}</div>
          <!--star 组件接收两个参数size与score-->
          <div class="star-warpper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <!--优惠信息列表-->
          <ul class="supports">
            <li class="support-item" v-for="item in seller.supports">
              <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
              <span class="text">{{seller.supports[$index].description}}</span>
            </li>
          </ul>
          <!--商家公告-->
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <!--公告详情-->
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <!--钉在底部的关闭按钮-->
      <div class="detail-close" @click="hideDetail">
        <i class="icon-close"></i>
      </div>
    </div>

  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star.vue';

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      hideDetail() {
        this.detailShow = false;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    /* 注册star组件*/
    components: {
      star
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .header
    position: relative
    color: #ffffff
    overflow: hidden
    background: rgba(7, 17, 27, .5)
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
      .content
        display: inline-block
        vertical-align: top
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            display: inline-block
            margin-left: 6px
            font-size: 16px
            font-weight: bold
            line-height: 18px
        .description
          margin-bottom: 10px
          font-size: 12px
          line-height: 12px
        .support
          margin-bottom: 2px
          font-size: 10px
          line-height 12px
          .icon
            display: inline-block
            vertical-align: top
            margin-right: 4px
            width: 12px
            height: 12px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            font-size: 10px
            line-height 12px

      .support-account
        position: absolute
        right: 12px
        bottom: 14px
        padding: 7px 8px
        box-sizing: border-box
        width: auto
        height: 24px
        font-size: 10px
        line-height: 12px
        text-align: center
        border-radius: 14px 16px
        background: rgba(0, 0, 0, .2)
        .count
          display: inline-block
          vertical-align: top
          margin-right: 2px
        .icon-keyboard_arrow_right
          display: inline-block
          vertical-align: top
          font-size: 10px

    .bulletin-wrapper
      position: relative
      padding: 0 22px 0 12px
      height: 28px
      line-height: 28px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      /*font-size: 0*/
      background: rgba(0, 0, 0, .2)
      .bulletin-title
        display: inline-block
        vertical-align: top
        margin-top: 8px
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        vertical-align: top
        margin: 0 4px
        font-size: 10px
      .icon-keyboard_arrow_right
        position: absolute
        right: 12px
        top: 8px
        font-size: 10px

    .background
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      filter: blur(10px)
      z-index: -1
    .detail
      position: fixed
      top: 0
      left: 0
      z-index: 100
      width: 100%
      height: 100%
      overflow: auto
      transition: all .5s
      backdrop-filter: blur(10px)
      -webkit-backdrop-filter: blur(10px)
      // background: rgba(7, 17, 27, .8)
      &.fade-transition
        opacity: 1
        background: rgba(7, 17, 27, .8)
      &.fade-enter, &.fade-leave
        opacity: 0
        background: rgba(7, 17, 27, 0)
      .detail-wrapper
        width: 100%
        min-height: 100%
        .detail-main
          margin-top: 64px
          padding-bottom: 64px
          .name
            font-size: 16px
            font-weight: 700
            line-height: 16px
            text-align: center
          .star-warpper
            margin-top: 18px
            padding: 2px 0
            text-align: center
          .title
            display: flex
            width: 80%
            margin: 28px auto 24px auto
            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: 1px solid rgba(255, 255, 255, .2)
            .text
              padding: 0 12px
              font-size: 14px
              font-weight: 700
          .supports
            margin: 0 auto
            padding: 0 12px
            width: 80%
            box-sizing: border-box
            .support-item
              margin-bottom: 12px
              height: 16px
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                vertical-align: top
                margin-right: 6px
                width: 16px
                height: 16px
                background-repeat: no-repeat
                background-size: 16px 16px
                &.decrease
                  bg-image('decrease_2')
                &.discount
                  bg-image('discount_2')
                &.special
                  bg-image('special_2')
                &.invoice
                  bg-image('invoice_2')
                &.guarantee
                  bg-image('guarantee_2')
              .text
                font-size: 12px
                line-height: 16px

          .bulletin
            width: 80%
            margin: 0 auto
            padding: 0 12px
            box-sizing: border-box
            .content
              font-size: 12px
              line-height: 24px
      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto 0 auto
        clear: both
        font-size: 32px


</style>
