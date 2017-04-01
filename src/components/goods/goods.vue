<template>
  <div class="goods">
    <div class="menu-wrapper"></div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: []
      };
    },
    created() {
      this.$http.get('/api/goods').then((res) => {
        console.log(res);
        res = res.body;
        if (res.errno === ERR_OK) {
          this.goods = res.data;
          console.log(this.goods);
        };
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      /*一个兼容性写法，不写Android手机上会有问题*/
      width: 80px
      background: #f3f5f7
    .foods-wrapper
      flex: 1

</style>
