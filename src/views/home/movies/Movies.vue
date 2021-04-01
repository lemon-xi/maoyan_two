<template>
  <main>
    <nav class="movie-nav">
      <ul>
        <li>
          <span>北京</span>
          <b class="movie-ico">&#xe65b;</b>
        </li>
        <li>
          <span class="active">热映</span>
          <span>待映</span>
        </li>
        <li class="movie-ico">&#xe616;</li>
      </ul>
    </nav>
    <div class="movie-list">
      <MovieList></MovieList>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import MovieList from "@/components/MovieList";

export default {
  data() {
    return {
      movieList: []
    }
  },
  components: {
    MovieList
  },

  async mounted() {
    let res = await axios.get('/mmdb/movie/v2/list/hot.json', {
      params: {
        limit: 10,
        offset: 0,
        ct: '北京'
      }
    })
    console.log(res)
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
//主体
main
  height 100%
  flex 1

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

</style>
