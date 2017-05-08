<template>
  <yd-layout id="app">
    <yd-navbar slot="navbar" :title="title">
      <div slot="left">
        <a href="javascript:;" @click="back">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </a>
      </div>
    </yd-navbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <yd-tabbar slot="tabbar" v-show="isShow">
      <yd-tabbar-item title="概括" link="/">
        <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="明细" link="/list">
        <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="我的" link="/home">
        <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: '导航',
        isShow: true
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  body {
    /*background: #fff;*/
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .text-left {
    text-align: left
  }
  .f-24 {
    font-size: .4rem;
  }
  .split {
    margin-top: 0.35rem;
  }
</style>
