<template>
  <main>
    <div class="card" v-for="item in list">
      <yd-flexbox class="card-header">
        <yd-flexbox-item class="text-left">设备{{ item.termimalID }}</yd-flexbox-item>
        <router-link :to="{name: 'Detail', params: {id: item.termimalID}}" class="c-999">月统计</router-link>
      </yd-flexbox>
      <yd-flexbox class="card-body">
        <yd-flexbox-item class="flex-col" v-for="a in item.list" :key="a.num">
          <small class="c-999">{{ a.itemName }}</small>
          <em class="f-24 green">{{ a.itemCount }}</em>
        </yd-flexbox-item>
      </yd-flexbox>
    </div>
  </main>
</template>

<script>
  import {
    fetchDevice
  } from '../api'
  export default {
    name: 'index',
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
        fetchDevice()
          .then(res => {
            if (res.body.data.items && res.body.data.items.length) {
              this.list = res.body.data.items
            }
          })
      }
    }
  }
</script>

<style>
  
</style>