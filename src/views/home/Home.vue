<template>
  <div class="m-home">
    <!--    头部-->
    <header>猫猫电影</header>
    <transition>

    <router-view></router-view>
    </transition>
    <nav class="tabbar">
      <van-tabbar v-model="active" active-color="#cd4c42" inactive-color="#666" route>
        <van-tabbar-item to="/home/movies/intheaters">
          <span>电影</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont" name="movie" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item  to="/home/theaters">
          <span>影院</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont" name="theater" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item  to="/home/profile">
          <span>我的</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont" name="profile" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </nav>
    <!--    <nav class="tabbar">-->
    <!--      <ul>-->
    <!--        <router-link class="movie-ico" active-class="active" tag="li" to="/home/movies">-->
    <!--          <b>&#xe7d3;</b>-->
    <!--          <span>电影</span>-->
    <!--        </router-link>-->
    <!--        <router-link class="movie-ico" active-class="active" tag="li" to="/home/theaters">-->
    <!--          <b> &#xe8c0;</b>-->
    <!--          <span>影院</span>-->
    <!--        </router-link>-->
    <!--        <router-link class="movie-ico" active-class="active" tag="li" to="/home/profile">-->
    <!--          <b> &#xe60e;</b>-->
    <!--          <span>个人</span>-->
    <!--        </router-link>-->
    <!--      </ul>-->
    <!--    </nav>-->
  </div>
</template>

<script>
import Movies from "@/views/home/movies/Movies";
import Vue from 'vue';
import {Icon} from 'vant';
import {Tabbar, TabbarItem} from 'vant';

Vue.use(TabbarItem).use(Tabbar).use(Icon);

export default {
  data() {
    return {
      active: 0,
    }
  },
  components: {
    Movies
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
.m-home
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
//border1px(1px 0 0 0)
//
//ul
//  display flex
//
//  li
//    flex 1
//    display flex
//    flex-direction column
//    justify-content center
//    align-items center
//    padding-top .06rem
//    color #999
//
//    &.active
//      color #cd4c42
//
//    b
//      font-size .26rem
//      font-weight normal
//      line-height .2rem
//
//    span
//      font-size .12rem
//      transform scale(0.9)
</style>
