<template>
  <main style="min-height: 100%; background:#fff;">
    <div class="card" style="margin-top:0; border-bottom: 1px solid #ddd;margin-bottom:.3rem">
      <yd-flexbox class="card-header">
        <yd-flexbox-item class="text-left">{{ name }}{{ id }}</yd-flexbox-item>
      </yd-flexbox>
      <yd-flexbox class="card-body">
        <yd-flexbox-item class="flex-col" v-for="a in detail" :key="a.count">
          <small class="c-999">{{ a.itemName }}</small>
          <em class="f-24 green">{{ a.itemCount }}</em>
        </yd-flexbox-item>
      </yd-flexbox>
    </div>
    <div class="detail-chart">
      <charts :loading="chartLoading" :titles="titls" :chart-data="chartData" @change-type="changeType" @change-date-type="changeDateType" />
    </div>
  </main>
</template>

<script>
  import {
    fetchDeviceDetail,
    fetchDeviceDetailChart
  } from '../api'
  import charts from '../components/charts'
  export default {
    name: 'index',
    data() {
      return {
        id: this.$route.params.id,
        name: this.$route.query.name,
        detail: [],
        titls: [{
            id: 1,
            name: '4R照片'
          },
          {
            id: 2,
            name: '证件照'
          },
          {
            id: 3,
            name: '身份证'
          },
          {
            id: 4,
            name: '文档'
          },
          {
            id: 8,
            name: 'A4照片'
          }
        ],
        chartData: {
          xAxis: [],
          series: []
        },
        chartParams: {
          terminalID: this.$route.params.id,
          dateType: 2,
          type: 1
        },
        chartLoading: true
      }
    },
    activated() {
      this.id = this.$route.params.id
      this.chartParams.terminalID = this.$route.params.id
      this.load()
      this.loadChart()
    },
    methods: {
      load() {
        fetchDeviceDetail({
            id: this.id
          })
          .then(res => {
            this.detail = res.data.data
          })
      },
      loadChart() {
        this.chartLoading = true
        fetchDeviceDetailChart(this.chartParams)
          .then(res => {
            this.chartLoading = false
            const data = res.body.data
            if (data && data.length) {
              this.chartData.xAxis = data.map(item => item.itemName)
              this.chartData.series = data.map(item => item.itemCount)
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
  div.detail-chart .my-swipe{
    margin: .5rem 0 .4rem;
  }
</style>
