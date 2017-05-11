<template>
  <main>
    <div class="user-win">
      <h1>{{ detail.nickName }}</h1>
    </div>
    <yd-cell-group>
      <yd-cell-item arrow type="link" href="/receipt/log">
        <span slot="left">累计提现：{{ detail.withdrawAmt }}</span>
      </yd-cell-item>
    </yd-cell-group>
    <div class="panale flex-col">
      <em class="f-24">${{ detail.enWithdrawAmt}}</em>
      <router-link to="/receipt">
        <yd-button type="hollow">申请提现</yd-button>
      </router-link>
    </div>
    <yd-cell-group>
      <yd-cell-item arrow type="link" href="/home/profile">
        <span slot="left">我的资料</span>
      </yd-cell-item>
      <yd-cell-item arrow type="link" href="/home/assets">
        <span slot="left">我的设备</span>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
      <yd-cell-item arrow type="link" href="/home/contact">
        <span slot="left">联系客服</span>
      </yd-cell-item>
    </yd-cell-group>
  </main>
</template>

<script>
  import {
    fetchPerson
  } from '../api'
  export default {
    name: 'index',
    data() {
      return {
        detail: {
          nickName: '周某某',
          withdrawAmt: '200',
          enWithdrawAmt: '321'
        }
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      load() {
        fetchPerson({openId: 1,})
          .then(res => {
            console.log(res)
            this.detail = res.data.data
          })
      }
    },
  }
</script>

<style>
  .user-win {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
  .m-cell::before {
    /*content: "";*/
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #b2b2b2;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .panale {
    margin-top: -.35rem;
    margin-bottom: .35rem;
    padding: 1rem 0;
    background: #ef4f4f;
    color: #fff;
  }
</style>