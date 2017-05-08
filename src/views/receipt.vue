<template>
  <main class="flex-col" style="height: 100%">
    <yd-cell-group>
        <yd-cell-item>
            <span slot="left">申请日期</span>
            <span slot="right">2012</span>
        </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
        <yd-cell-item>
            <span slot="left">申请金额</span>
            <span slot="right">¥2000</span>
        </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
        <yd-cell-item>
            <span slot="left">商家编号</span>
            <span slot="right">zj123</span>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">联系人</span>
            <span slot="right">周某某</span>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">联系电话</span>
            <span slot="right">154223433</span>
        </yd-cell-item>
    </yd-cell-group>
    <div class="flex-col" style="flex: 1; padding: 0 .5rem">
      <yd-button size="large" type="danger">确定申请</yd-button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>