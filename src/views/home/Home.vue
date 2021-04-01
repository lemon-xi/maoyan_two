<template>
  <div>
    <!--    头部-->
    <header>猫眼电影</header>
    <Movies></Movies>
    <nav class="tabbar">
      <ul>
        <li class="active movie-ico">
          <b>&#xe7d3;</b>
          <span>电影</span>
        </li>
        <li class="movie-ico">
          <b> &#xe8c0;</b>
          <span>搜索</span>
        </li>
        <li class="movie-ico">
          <b> &#xe60e;</b>
          <span>个人</span>
        </li>
      </ul>
    </nav>


  </div>
</template>

<script>
import Movies from "@/views/home/movies/Movies";
export default {
  data() {
    return {
      msg: 'helo'
    }
  },
  components:{
    Movies
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
div
  display flex
  flex-direction column
  height 100%

  header
    background-color #cd4c42
    color #ffffff
    height .44rem
    font-size .20rem
    font-weight bold
    text-align center
    line-height .5rem

    &::before
      content '\e8ae'
      font-family iconfont

    &::after
      content '\e8ae'
      font-family iconfont

  //底部导航

  .tabbar
    height .44rem
    //border-top solid 1px #ccc
    border1px(1px 0 0 0)

    ul
      display flex

      li
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding-top .06rem
        color #999

        &.active
          color #cd4c42

        b
          font-size .26rem
          font-weight normal
          line-height .2rem

        span
          font-size .12rem
          transform scale(0.9)
</style>
