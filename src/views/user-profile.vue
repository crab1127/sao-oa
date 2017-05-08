<template>
  <main>
    <yd-cell-group>
      <yd-cell-item>
        <div slot="left">商家编号：121312</div>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
      <yd-cell-item>
        <div slot="left">联系人：周某某</div>
      </yd-cell-item>
      <yd-cell-item>
        <div slot="left">联系电话：121312</div>
      </yd-cell-item>
      <yd-cell-item>
        <div slot="left">地点：121312</div>
      </yd-cell-item>
      <yd-cell-item>
        <div slot="left">详细地址：121312</div>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
      <yd-cell-item>
        <div slot="left">设备数量：2</div>
      </yd-cell-item>
    </yd-cell-group>
  </main>
</template>

<script>
  import {
    fetchProfile
  } from '../api'
  export default {
    name: 'profile',
    data() {
      return {
        detail: {}
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      load() {
        fetchProfile()
          .then(res => {
            this.detail = res.data.data
          })
      }
    }
  }
</script>