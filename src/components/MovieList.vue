<template>
  <ul>
    <van-skeleton 
        class="showSkeleton"
        avatar-shape="square"
        avatar-size="64"
        avatar
        :row="4"
        :animate="animate"
        :loading="showSkeleton"
        v-for="mv in movieList"
        :key="mv.nm"
    >
      <li>
        <div class="movie-img">
          <img :src="mv.img | wh('64.90')" :alt="mv.nm">
        </div>
        <div class="movie-info">
          <h1>
            {{ mv.nm }}
            <MovieVersion v-if="mv.ver" :ver="mv.ver" />
          </h1>
          <div class="movie-details">
            <p>{{ mv.cat }}</p>
            <p>{{ mv.desc }}</p>
            <div class="showInfo">{{ mv.showInfo }}</div>
          </div>
        </div>
        <MovieButton :mv="mv" />
      </li>
    </van-skeleton>

  </ul>
</template>

<script>
import MovieButton from "./MovieButton";
import MovieVersion from "./MovieVersion";
import Vue from 'vue';
import {Skeleton} from 'vant';

Vue.use(Skeleton);

export default {
  props: {
    movieList: {
      type: Array,
      required: true
    }
  },
  components: {
    MovieButton,
    MovieVersion
  },
  mounted() {
    this.showSkeleton = false
  },
  data() {
    return {
      loading: true,
      showSkeleton: true,
      animate: true
    };
  },
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/border.styl"
@import "~@/assets/stylus/ellipsis.styl"
ul
  padding-left .12rem

  .showSkeleton
    margin-top .1rem

  li
    height 1.14rem
    display flex
    padding .12rem .12rem .12rem 0
    border1px(0 0 1px 0)

    .movie-img
      width .76rem

      img
        width .64rem
        height .9rem

    .movie-info
      flex 1

      h1
        display flex
        align-items center
        font-size .17rem
        font-weight 700
        ellipsis(80%, 1)

      .movie-details
        p
          line-height .22rem
          color #666
          ellipsis(90%, 1)

        div
          line-height .22rem
          color #999
          ellipsis(90%, 1)

  &.last-child
    border1px(0)
</style>
