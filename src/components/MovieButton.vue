<template>
  <div class="container">
    <p v-if="mv.showst == 3">
      <span v-if="mv.sc == 0" style="color:#666">
        暂无评分
      </span>
      <span v-else>
        {{ mv.sc }}<span>分</span>
      </span>

    </p>
    <p v-else>
      {{ mv.wish }} <span>人想看</span>
    </p>
    <div v-if="mv.showst === 3">
      <span>购票</span>
    </div>
    <div v-else class="pre-sale">
      <span>预售</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mv: Object
  }
}
</script>

<style lang="stylus" scoped>
.container
  position relative
  display flex
  flex-direction column
  align-items flex-end
  justify-content center
  width .6rem

  p
    position absolute
    color #faaf00
    top 0
    width 1.5rem
    text-align right

    span
      font-size .12rem
      transform scale(0.8)

  > div
    width .46rem
    height .28rem
    background #dd5042
    border-radius .04rem
    color #ffffff
    text-align center
    line-height .28rem
    margin-top .2rem

    &.pre-sale
      background #69afe5
</style>
