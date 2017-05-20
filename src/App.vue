<template>
  <yd-layout id="app">
    <!--<yd-navbar slot="navbar" :title="title">
      <div slot="left">
        <a href="javascript:;" @click="back">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </a>
      </div>
    </yd-navbar>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <yd-tabbar slot="tabbar" v-show="isShow">
      <yd-tabbar-item title="概括" link="/" :active="routeName == 'Index'">
        <yd-icon name="star" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="明细" link="/list" :active="routeName == 'List'" >
        <yd-icon name="type" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <!--<yd-tabbar-item title="我的" link="/home" :active="routeName == 'Home'">
        <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>-->
    </yd-tabbar>
  </yd-layout>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: '导航',
        isShow: true,
        routeName: ''
      }
    },
    mounted () {
      this.routeName = this.$route.name
      let deviveWidth = document.documentElement.clientWidth
      document.documentElement.style.fontSize = `${deviveWidth / 7.5}px`
    },
    watch: {
      '$route'(route) {
        this.routeName = route.name
        if (['Index', 'List', 'Home'].indexOf(route.name) === -1) {
          this.isShow = false
        } else {
          this.isShow = true
        }
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
  .green {
    color:#6ACA6B
  }
  .c-999{
    color:#999
  }
  .g-scrollview:after {
   height: 0; 
  }
  .card {
    margin-top: .2rem;
    background: #fff;
  }
  .card-header {
    border-bottom: 1px solid #eee;
    padding: .2rem;
  }
  .card-body .flex-col {
    padding: .3rem 0;
  }
</style>
