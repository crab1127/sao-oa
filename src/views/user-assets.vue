<template>
  <main>
    <yd-cell-group>
      <yd-cell-item>
        <div slot="left">设备数量：{{ list.length }}</div>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group v-for="(item, index) in list" :key="index">
      <yd-cell-item>
        <div slot="left">设备{{ item.termimalID }}</div>
      </yd-cell-item>
      <yd-cell-item>
        <yd-icon slot="icon" name="location" size=".42rem"></yd-icon>
        <div slot="left" class="c-999">{{ item.address }}</div>
      </yd-cell-item>
    </yd-cell-group>
  </main>
</template>

<script>
  import {
    fetchAssets
  } from '../api'
  export default {
    name: 'profile',
    data() {
      return {
        list: [{
          "termimalID": 10160,
          "address": "广州市天河区",
        }, {
          "termimalID": 10161,
          "address": "广州市天河区",
        }, {
          "termimalID": 10162,
          "address": "广州市天河区",
        }]
      }
    },
    mounted() {
      // this.load()
    },
    methods: {
      load() {
        fetchAssets()
          .then(res => {
            this.list = res.data.data
          })
      }
    }
  }
</script>