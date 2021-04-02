<template>
  <main>
    <nav class="movie-nav">
      <ul>
        <li @click="handleCityClick">
          <span>北京</span>
          <b class="movie-ico">&#xe65b;</b>
        </li>
        <li>
          <router-link tag="span" active-class="active" to="/home/movies/intheaters">热映</router-link>
          <router-link tag="span" active-class="active" to="/home/movies/comingsoon">待映</router-link>
        </li>
        <li class="movie-ico">&#xe616;</li>
      </ul>
    </nav>
    <section class="movie-list">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
          <router-view :movie-list="movieList"></router-view>
        </van-list>
      </van-pull-refresh>
    </section>
  </main>
</template>

<script>
import Vue from 'vue';
import {List, PullRefresh, Skeleton} from 'vant';

Vue.use(List).use(PullRefresh).use(Skeleton);
export default {
  data() {
    return {
      movieList: [],
      refreshing: false,
      loading: false,
      finished: false,
    }
  },
  async mounted() {
    await this.loadData()
  },
  created() {
    this.hasMore = false
    this.limit = 12
    this.ct = '北京'
    this.offset = 0
  },
  methods: {
    handleCityClick() {
      this.$router.push('/citypick')
    },
    async loadData() {
      let result = await this.$http.get({
        url: '/movie/v2/list/hot.json',
        params: {
          limit: this.limit,
          offset: this.offset,
          ct: this.ct
        }
      })
      // console.log(result)
      let {hot, paging: {hasMore}} = result.data
      this.movieList = [...this.movieList, ...hot]
      this.hasMore = hasMore
    },

    async onLoad() {
      if (this.refreshing) {
        this.movieList = [];
        this.refreshing = false;
      }

      await this.loadData()
      this.loading = false
      //console.log(this.hasMore)
      if (!this.hasMore) {
        this.finished = true
      }

      this.offset += this.limit
      //console.log(this.offset)

    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      this.offset = 0;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },


}
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
//主体
main
  flex 1
  overflow hidden
  display flex
  flex-direction column

  .movie-nav
    > ul
      border1px(0 0 1px 0)
      display flex
      height .44rem

      li:first-child
        flex 100
        width 1rem
        display flex
        justify-content flex-start
        align-items center
        color #666
        padding-left .15rem

      li:nth-child(2)
        flex 231
        display flex
        justify-content center
        align-items center

        span
          display inline-block
          height .44rem
          line-height .44rem
          width .6rem
          text-align center
          min-width .7rem

          &:first-child
            margin-right .3rem
            margin-left -0.3rem

          &.active
            color #cd4c42
            border-bottom solid 2px #cd4c42

      li:last-child
        width .44rem
        border1px(0 0 0 1px)
        //border-left solid 1px #eee
        font-size .2rem
        line-height .44rem
        text-align center
        color #cd4c42

  .movie-list
    flex 1
    overflow-y scroll

    .showSkeleton
      margin-top .1rem
</style>
