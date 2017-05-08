<template>
  <main>
    <yd-flexbox>
      <yd-flexbox-item>
        <em>18台</em>
        <small>设备</small>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <em>1288张</em>
        <small>数量</small>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <em>889元</em>
        <small>金额</small>
      </yd-flexbox-item>
    </yd-flexbox>
    <yd-grids-group :rows="4">
      <!--<yd-grids-item v-for="n in 8">
              <span slot="text">asdfadf</span>
          </yd-grids-item>-->
    </yd-grids-group>
    <div>
      <div>4R照片</div>
    </div>
  </main>
</template>

<script>
  import {
    fetchIndex,
    fetchIndexChart
  } from '../api'
  export default {
    name: 'index',
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {
      load() {
        fetchIndex()
      }
    }
  }
</script>
