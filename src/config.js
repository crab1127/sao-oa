// 接口
export const API_ROOT = 'http://192.168.120.236:18081'
export const API = {
  // 首页
  index: API_ROOT + '/rwy-service/statistic/summary',
  indexChart: API_ROOT + '/rwy-service/statistic/chart',
  // 明细也
  deviceStatistics: API_ROOT + '/rwy-service/statistic/device',
  // 我的
  person: API_ROOT + '/rwy-service/person',
  profile: API_ROOT + '/profile',
  assets: API_ROOT + '/assets',
  receiptLog: API_ROOT + '/receipt/logs',
  receipt: API_ROOT + '/receipt',

}