<template>
  <main>
    <yd-cell-group v-for="(item, index) in list" :key="index">
      <yd-cell-item>
        <div slot="left">提现：{{ item.num }}</div>
        <span slot="right">{{ item.time }}</span>
      </yd-cell-item>
    </yd-cell-group>
  </main>
</template>

<script>
  import {
    fetchReceiptLog
  } from '../api'
  export default {
    name: 'receipt-log',
    data() {
      return {
        list: [
          {
            num: 100,
            time: '2016-05-11'
          },
          {
            num: 300,
            time: '2016-05-02'
          },
          {
            num: 180,
            time: '2016-04-21'
          },
          {
            num: 270,
            time: '2016-04-01'
          },
          {
            num: 50,
            time: '2016-03-25'
          },
        ]
      }
    },
    mounted() {
      // this.load()
    },
    methods: {
      load() {
        fetchReceiptLog()
          .then(res => {
            this.list = res.data.data
          })
      }
    }
  }
</script>