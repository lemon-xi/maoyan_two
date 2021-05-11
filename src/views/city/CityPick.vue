<template>
  <div>
    <van-index-bar :index-list="indexList" :sticky="false">
      <section
        id="city-list"
        class="city-list-container"
        style="display: block"
      >
        <section>
          <van-index-anchor index="定位" class="city-title">定位城市</van-index-anchor>
          <van-cell class="city-list city-list-inline clearfix ci">
            <div class="location-city">定位失败，请点击重试</div>
          </van-cell>
        </section>

        <section>
          <van-index-anchor index="热门">热门城市</van-index-anchor>
          <div class="city-list city-list-inline clearfix">
            <van-cell
                class="city-item" 
                v-for="(hot,index) in cityData.hotCities"
                :key="index"
                @click="pickCity({name:hot.name,id:hot.id})"
            >
             {{ hot.name}}
            </van-cell>
          </div>
        </section>

        <section>
          <template  v-for="(city,key) in cityData.cities" class="list-block" >
          <van-index-anchor :index="key">
            {{key}}
          </van-index-anchor>
          <div class="city-list city-list-block clearfix">
            <van-cell 
              class="city-item" 
              data-nm="阿拉善盟" 
              data-id="150"
              v-for="ci in city"
              :key="ci.name"
              :title="ci.name"
               @click="pickCity({name:ci.name,id:ci.id})"
            > 
            </van-cell>
          </div>
          </template>
        </section>
      </section>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor,Cell } from "vant";
import {mapActions} from 'vuex'

Vue.use(IndexBar).use(Cell).use(IndexAnchor);
export default {
  data() {
    return {
      indexList: ["定位", "热门"],
      cityData: {},
    };
  },
  async mounted() {
    let res = await this.$http.get({
      url: "/city.json",
    });
    this.cityData = res.data;
    this.indexList = [...this.indexList, ...Object.keys(res.data.cities)];
  },
  methods:{
    pickCity(city){
      console.log(city)
      this.changeCity(city)
      this.$router.back()
    },
    ...mapActions(['changeCity'])
  }
};
</script>

<style lang="stylus" scoped>
.clearfix:after 
    content: " ";
    display: table;
    clear: both;

.city-list-container
    height: 6675px;
    background-color: #ebebeb;
    font-size: 14px;
    color: #333;
    top: 0;
    bottom: 0;
    width: 100%;
    overflow-y: auto;
    .ci
      background-color #f5f5f5
    .location-city
          width: auto;
          min-width: 30%;
          padding: 0 20px;
          float: left;
          background: #fff;
          width: 50%;
          height: 33px;
          margin-left: 4%;
          padding: 0 4px;
          border: 1px solid #e6e6e6;
          border-radius: 3px;
          line-height: 33px;
          text-align: center;
          box-sizing: border-box;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
    .city-list-inline
      background-color: #f5f5f5;
      padding-bottom: 8px;
      padding-right: 30px;
      .city-item
        float: left;
        background: #fff;
        width: 29%;
        height: 33px;
        margin-top: 15px;
        margin-left: 4%;
        padding: 0 4px;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        line-height: 33px;
        text-align: center;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      .van-cell__value--alone
          text-align center
    .van-cell
        background-color #f5f5f5  
</style> 

