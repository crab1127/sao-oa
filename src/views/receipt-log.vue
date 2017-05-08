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
        list: []
      }
    },
    mounted() {
      this.load()
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