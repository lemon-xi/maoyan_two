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
          <router-link tag="span" active-class="active" to="/home/movies/comingsoon" >待映</router-link>
        </li>
        <li class="movie-ico">&#xe616;</li>
      </ul>
    </nav>
    <router-view :movie-list="movieList"></router-view>
  </main>
</template>

<script>
export default {
  data() {
    return {
      movieList: []
    }
  },
  methods:{
    handleCityClick(){
      this.$router.push('/citypick')
    }
  },
  async mounted() {
    let result = await this.$http.get({
      url:'/movie/v2/list/hot.json',
      params:{
        limit: 12,
        offset: 0,
        ct: '北京'
      }
    })
    // console.log(result)
    this.movieList = result.data.hot
  }
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
</style>
