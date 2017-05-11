<template>
  <div>
    <div class="my-swipe">      
      <swipe :auto="0" @change="handleChange" :show-indicators="false" :default-index="current"> 
        <swipe-item v-if="titles && titles.length" v-for="item in titles" :key="item.itemCount">{{ item.name }}</swipe-item>
      </swipe>
      <yd-navbar-back-icon class="my-swipe-left"></yd-navbar-back-icon>
      <yd-navbar-next-icon class="my-swipe-right"></yd-navbar-next-icon>
    </div>
    <div class="m-flexbox flexbox-horizontal">
      <div class="flexbox-item" @click="setDateType(1)" :class="{'active': dateType == 1}">一天</div>
      <div class="flexbox-item" @click="setDateType(2)" :class="{'active': dateType == 2}">一周</div>
      <div class="flexbox-item" @click="setDateType(3)" :class="{'active': dateType == 3}">一月</div>
    </div>
    <div class="echarts">
      <charts :option="bar" :loading="loading"></charts>
    </div>
  </div>
</template>

<script>
  import 'vue-swipe/dist/vue-swipe.css'
  import { Swipe, SwipeItem } from 'mint-ui'
  import charts from 'vue-echarts-v3/src/full.vue'

  export default {
    name: 'chart',
    props: {
      titles: Array,
      chartData: Array,
      loading: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      current: 0,
      dateType: 2,
      bar: {
        tooltip: {},
        xAxis: {
          data: ['1', '2', '3', '4', '5', '6']
        },
        yAxis: {},
        series: [{
          name: 'Sales',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }),
    methods: {
      
      handleChange(a){
        const id = this.titles[a].id
        this.$emit('change-type', id)
      },
      setDateType(val) {
        this.dateType = val
        this.$emit('change-date-type', val)
      }
    },
    components: {
      charts,
      Swipe,
      SwipeItem
    }
  }
</script>

<style scoped>
  .echarts {
    width: 100%;
    height: 250px;
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
  .my-swipe-left{
    position: absolute;
    width: 40px;
    top: 0;
    left: 0;
  }
  .my-swipe-right{
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
  border-left:1px solid #157EFB;
  color: #157EFB;
}
.flexbox-item:first-child{
  border:0;
}
.flexbox-item.active{
  color: #fff;
  background: #157EFB
}
</style>