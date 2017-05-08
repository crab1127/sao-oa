<template>
  <main>
    <yd-cell-group>
      <yd-cell-item>
        <div slot="left">设备数量：{{ list.length }}</div>
      </yd-cell-item>
    </yd-cell-group>


    <yd-cell-group v-for="(item, index) in list" :key="index">
      <yd-cell-item>
        <div slot="left">{{ item.name }}</div>
      </yd-cell-item>
      <yd-cell-item>
        <yd-icon slot="icon" name="location" size=".42rem"></yd-icon>
        <div slot="left">{{ item.address }}</div>
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
        list: []
      }
    },
    mounted() {
      this.load()
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