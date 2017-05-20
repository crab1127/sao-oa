// 接口
// export const API_ROOT = 'http://mpapi.redseawetoo.com/rwy-service'
export const API_ROOT = apiRoot || 'http://192.168.120.236:18081/rwy-service'
export const API = {
  // 首页
  index: API_ROOT + '/statistic/summary',
  indexChart: API_ROOT + '/statistic/chart',
  // 明细也
  deviceStatistics: API_ROOT + '/statistic/device',
  // 我的
  person: API_ROOT + '/person',
  profile: API_ROOT + '/profile',
  assets: API_ROOT + '/assets',
  receiptLog: API_ROOT + '/receipt/logs',
  receipt: API_ROOT + '/receipt',

}