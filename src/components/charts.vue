<template>
  <div>
    <div class="my-swipe">
      <swiper :options="swiperOption">
        <swiper-slide v-if="titles && titles.length" v-for="item in titles" :key="item.id">{{ item.name }}</swiper-slide>
        <div class="swiper-button-prev" slot="button-prev">
          <yd-navbar-back-icon class="my-swipe-left"></yd-navbar-back-icon>
        </div>
        <div class="swiper-button-next" slot="button-next">
          <yd-navbar-next-icon class="my-swipe-right"></yd-navbar-next-icon>
        </div>
      </swiper>
    </div>
    <div class="m-flexbox flexbox-horizontal">
      <div class="flexbox-item" @click="setDateType(1)" :class="{'active': dateType == 1}">一天</div>
      <div class="flexbox-item" @click="setDateType(2)" :class="{'active': dateType == 2}">一周</div>
      <div class="flexbox-item" @click="setDateType(3)" :class="{'active': dateType == 3}">一月</div>
    </div>
    <div class="echarts">
      <charts v-show="isShow" :option="line" :loading="loading"></charts>
      <span v-show="!isShow">暂无数据</span>
    </div>
  </div>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import charts from 'vue-echarts-v3/src/full.vue'
  export default {
    name: 'chart',
    props: {
      titles: Array,
      chartData: Object,
      loading: {
        type: Boolean,
        default: true
      }
    },
    data() {
      const self = this
      return {
        current: 2,
        swiperOption: {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          loop: true,
          onSlideChangeEnd(swiper) {
            self.handleChange(swiper.realIndex)
          }
        },
        dateType: 2,
        line: {
          color: ['#6ACA6B'],
          tooltip: {},
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
          },
          yAxis: {},
          series: [{
            type: 'line',
            data: []
          }]
        },
        isShow: true
      }
    },
    watch: {
      chartData: {
        deep: true,
        handler(charts) {
          if (charts.series && charts.series.length) {
            this.line.xAxis.data = charts.xAxis
            this.line.series[0].data = charts.series
            this.isShow = true
          } else {
            this.isShow = false
            this.line.xAxis.data = []
            this.line.series[0].data = []
          }
        }
      }
    },
    methods: {
      handleChange(index) {
        const id = this.titles[index].id
        this.$emit('change-type', id)
      },
      setDateType(val) {
        this.dateType = val
        this.$emit('change-date-type', val)
      }
    },
    components: {
      charts,
      swiper,
      swiperSlide
      // Swipe,
      // SwipeItem
    }
  }
</script>

<style scoped>
  .echarts {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .my-swipe {
    position: relative;
    height: 40px;
    line-height: 40px;
    color: #333;
    font-size: .4rem;
    margin: .2rem 0;
    text-align: center;
  }
  .my-swipe-left {
    position: absolute;
    width: 40px;
    top: 0;
    left: 0;
  }
  .my-swipe-right {
    position: absolute;
    width: 40px;
    top: 0;
    right: 0;
  }
  .m-flexbox {
    margin: 0 .5rem;
    border: 1px solid #157EFB;
    border-radius: 5px;
  }
  .flexbox-item {
    padding: 0.15rem;
    border-left: 1px solid #157EFB;
    color: #157EFB;
  }
  .flexbox-item:first-child {
    border: 0;
  }
  .flexbox-item.active {
    color: #fff;
    background: #157EFB
  }
  .swiper-button-prev,
  .swiper-button-next {
    background: none;
  }
</style>