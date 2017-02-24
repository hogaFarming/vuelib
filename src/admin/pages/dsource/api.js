import Vue from 'vue'

/**
 * 获取数据源列表
 * 
 * @export
 * @param {any} queryName
 * @param {any} recStatus
 * @returns
 */
export function fetchDataSourceList (queryName, recStatus) {
  return Vue.http.post('/api/basicdata/datasourcequery', {
    datasourcename: queryName,
    recStatus
  })
}

/**
 * 新增数据源
 {
  "DataSourceName":"",
  "SourceType":0,
  "recstatus":1,
  "Remark":"szds"
 }
 * @export
 * @param {any} params
 * @returns
 */
export function saveDataSource (params) {
  return Vue.http.post('/api/basicdata/datasourcequery', params)
}

/**
 * 编辑数据源
 {
    "CellConfigId": "4a3376f0-273f-4dde-9700-8bda42365821",
    "EntityId": "c4d298e3-ba06-4cf6-ac15-01d89f50b724",
    "RuleSql": "asdasd",
    "CssTypeId": 1003,
    "SourceId": 1002,
    "FieldKeys": "[\"custname\", \"custtype\", \"statasdsadus\"]",
    "Fonts": "[12, 13, 16]",
    "Colors": "[\"#0000ff\", \"#0010ff\", \"#0000ff\"]"
} 
 * @export
 * @param {any} queryName
 * @param {any} recStatus
 * @returns
 */
export function saveDataSouceDetail (queryName, recStatus) {
  return Vue.http.post('/api/basicdata/datasourcequery', {
    datasourcename: queryName,
    recStatus
  })
}
