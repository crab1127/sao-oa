import Vue from 'vue'
import { API } from './config'

// 首页
export const fetchIndex = params => Vue.http.get(API.index, { params })
export const fetchIndexChart = params => Vue.http.get(API.indexChart, { params })

// 明细页
export const fetchDevice = params => Vue.http.get(API.deviceStatistics, { params })
export const fetchDeviceDetail = params => Vue.http.get(`${API.deviceStatistics}/${params.id}`, { params })
export const fetchDeviceDetailChart = params => Vue.http.get(`${API.deviceStatistics}/${params.id}/chart`, { params })

// 我的中心
export const fetchPerson = params => Vue.http.get(API.person, { params })
export const fetchProfile = params => Vue.http.get(API.profile, { params })
export const fetchAssets = params => Vue.http.get(API.assets, { params })
export const fetchReceiptLog = params => Vue.http.get(API.receiptLog, { params })
export const fetchReceipt = params => Vue.http.post(API.receiptLog, params)