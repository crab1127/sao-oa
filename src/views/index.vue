<template>
  <main style="background: #fff;">
    <yd-flexbox class="area-1">
      <yd-flexbox-item class="flex-col">
        <em>{{ detail.deviceCount }}台</em>
        <small>终端</small>
      </yd-flexbox-item>
      <yd-flexbox-item class="flex-col">
        <em>{{ detail.sheetCount }}张</em>
        <small>数量</small>
      </yd-flexbox-item>
      <yd-flexbox-item class="flex-col">
        <em>{{ detail.totalAmt }}元</em>
        <small>金额</small>
      </yd-flexbox-item>
      <div class="today">今日</div>
    </yd-flexbox>
    <div class="area-2">
      <yd-flexbox class="bottom-line">
        <yd-flexbox-item class="flex-col">
          <em class="f-24">{{ detail.r4Ratio }}%</em>
          <small>4R照片</small>
        </yd-flexbox-item>
        <yd-flexbox-item class="flex-col">
          <em class="f-24">{{ detail.provePhRatio }}%</em>
          <small>证件照</small>
        </yd-flexbox-item>
        <yd-flexbox-item class="flex-col">
          <em class="f-24">{{ detail.identRatio }}%</em>
          <small>身份证</small>
        </yd-flexbox-item>
        <yd-flexbox-item class="flex-col">
          <em class="f-24">{{ detail.docRatio }}%</em>
          <small>文档</small>
        </yd-flexbox-item>
      </yd-flexbox>
      <yd-flexbox>
        <yd-flexbox-item class="flex-col">
          <em class="f-24">{{ detail.printSuccNum }}</em>
          <small>打印成功</small>
        </yd-flexbox-item>
        <yd-flexbox-item class="flex-col">
          <em class="f-24">{{ detail.cancePrintNum }}</em>
          <small>未成功</small>
        </yd-flexbox-item>
        <yd-flexbox-item class="flex-col">
          <em class="f-24">{{ detail.refundAmt }}</em>
          <small>退款金额</small>
        </yd-flexbox-item>
        <yd-flexbox-item class="flex-col">
          <em class="f-24">{{ detail.troubleDeviceNum }}</em>
          <small>终端失联</small>
        </yd-flexbox-item>
      </yd-flexbox>
    </div>
    <div style="margin:0 .4rem" class="area-3">
      <charts
        :loading="chartLoading"
        :titles="titles"
        :chart-data="chartData"
        @change-type="changeType"
        @change-date-type="changeDateType"/>
    </div>
  </main>
</template>

<script>
  import {
    fetchIndex,
    fetchIndexChart
  } from '../api'
  import charts from '../components/charts'
  export default {
    name: 'index',
    data() {
      return {
        chartLoading: true,
        detail: {},
        titles: [
          {
            name: '4R照片',
            id: 1
          },
          {
            name: '证件照',
            id: 2,
          },
          {
            name: '身份证',
            id: 3
          },
          {
            name: '文档',
            id: 4
          },
          {
            name: '打印成功',
            id: 5
          },
          {
            name: '未成功',
            id: 6
          },
          {
            name: '退款金额',
            id: 8
          },
          {
            name: '终端失联',
            id: 7
          }
        ],
        chartData: {
          xAxis: [],
          series: []
        },
        chartParams: {
          dateType: 2,
          type: 1
        }
      }
    },
    mounted() {
      this.load()
      this.loadChart()
    },
    methods: {
      load() {
        fetchIndex()
          .then(res => {
            this.detail = res.body.data
          })
      },
      loadChart() {
        this.chartLoading = true
        fetchIndexChart(this.chartParams)
          .then(res => {
            this.chartLoading = false
            const data = res.body.data

            if (data && data.length) {
              this.chartData.xAxis = data.map(item => item.typeDate)
              this.chartData.series = data.map(item => item.typeCount)
            } else {
               this.chartData.xAxis = null
               this.chartData.series = null
            }
          })
          .catch(err => {
            this.chartLoading = false
            this.chartData.xAxis = null
            this.chartData.series = null
          })
      },
      changeType(val) {
        this.chartParams.type = val
        this.loadChart()
      },
      changeDateType(val) {
        this.chartParams.dateType = val
        this.loadChart()
      }
    },
    components: {
      charts
    }
  }
</script>

<style>
  .area-1{
    position: relative;
    background: #59d6ff
  }
  .today {
    position: absolute;
    top: 5px;
    left: 5px;
    color: #333;
  }
  .area-1 .flexbox-item {
    padding: .3rem 0;
  }
  .area-1 em {
    color:#fff;
    font-size: .5rem
  }
  .area-2 {
    padding: .4rem .3rem .1rem; 
  }
  .area-2 .flexbox-item{
    border-left: 1px solid #ddd;
    margin: .2rem 0;
  }
  .area-2 .m-flexbox .flexbox-item:first-child{
    border:0
  }
  .area-2 em {
    color:#000;
  }
  .area-2 small {
    color:#999;
  }
  .bottom-line{
    border-bottom: 1px solid #ccc;
  }
  div.area-3 .m-flexbox{
    border: 1px solid #59d6ff;
  }
  div.area-3 .flexbox-item {
    border-left: 1px solid #59d6ff;
    color: #59d6ff;
  }
  div.area-3 .flexbox-item.active {
    color: #fff;
    background: #59d6ff
  }
</style>

