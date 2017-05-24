<template>
  <main ref="loadmore">
    <div class="card" v-for="item in list">
      <yd-flexbox class="card-header">
        <yd-flexbox-item class="text-left">{{ item.salesNetworkName }}</yd-flexbox-item>
        <router-link :to="{name: 'Detail', params: {id: item.termimalID}, query: {name: item.salesNetworkName}}" class="c-999">月统计</router-link>
      </yd-flexbox>
      <yd-flexbox class="card-body">
        <yd-flexbox-item class="flex-col">
          <small class="c-999">4R照片</small>
          <em class="f-24 green">{{ item.list | getCount('801') }}</em>
        </yd-flexbox-item>
        <yd-flexbox-item class="flex-col">
          <small class="c-999">证件照</small>
          <em class="f-24 green">{{ item.list | getCount('805') }}</em>
        </yd-flexbox-item>
        <yd-flexbox-item class="flex-col">
          <small class="c-999">文档</small>
          <em class="f-24 green">{{ item.list | getCount('302') }}</em>
        </yd-flexbox-item>
        <yd-flexbox-item class="flex-col">
          <small class="c-999">身份证</small>
          <em class="f-24 green">{{ item.list | getCount('303') }}</em>
        </yd-flexbox-item>
        <yd-flexbox-item class="flex-col">
          <small class="c-999">A4照片</small>
          <em class="f-24 green">{{ item.list | getCount('301') }}</em>
        </yd-flexbox-item>
      </yd-flexbox>
    </div>
    <div v-if="loading" style="padding: 10px; text-ailgn: center;"> 加载中...</div>
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
        list: [],
        page: 1,
        total: null,
        loading: true
      }
    },
    mounted() {
      this.load()
      document.querySelector('#scrollView').addEventListener('scroll', el => {
        this.loadMore()
      })
    },
    methods: {
      load() {
        this.loading = true
        fetchDevice({page: this.page})
          .then(res => {
            if (res.body.data.items && res.body.data.items.length) {
              if (this.list.length) {
                this.list = [...this.list, ...res.body.data.items]
              } else {
                this.list = res.body.data.items
              }
              
              this.page++
              this.total = res.body.data.total
              this.loading = false
            }
          })
          .catch(err => {
            this.loading = false
          })
      },
      loadMore() {
        const $el = document.querySelector('#scrollView')
        console.log($el.scrollHeight, $el.clientHeight, $el.scrollTop)
        if (!this.loading && $el.scrollHeight <= $el.clientHeight + $el.scrollTop + 10) {
          if (this.list && this.list.length < this.total ) {
            this.load()
          }
        }
      }
    },
    filters: {
      getCount(list, id) {
        let count = 0
        list.forEach(item => {
          if (item.itemID == id) {
            count = item.itemCount
          }
        })
        return count
      }
    }
  }
</script>

<style>
  
</style>