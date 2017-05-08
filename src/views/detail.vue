<template>
  <main>
    <div class="card">
      <yd-flexbox class="card-header">
        <yd-flexbox-item class="text-left">设备{{ id }}</yd-flexbox-item>
      </yd-flexbox>
      <yd-flexbox class="card-body">
        <yd-flexbox-item class="flex-col" v-for="a in detail" :key="a.count">
          <small>{{ a.typeName }}</small>
          <em class="f-24">{{ a.count }}</em>
        </yd-flexbox-item>
      </yd-flexbox>
    </div>
  </main>
</template>

<script>
  import {
    fetchDeviceDetail,
    fetchDeviceDetailChart
  } from '../api'
  export default {
    name: 'index',
    data() {
      return {
        id: this.$route.params.id,
        detail: []
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      load() {
        fetchDeviceDetail({
            id: this.id
          })
          .then(res => {
            this.detail = res.data.data
          })
      }
    }
  }
</script>