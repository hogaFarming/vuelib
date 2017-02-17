import Vue from 'vue'

const prefix = 'http://172.16.0.121/api/protocol'

/**
 * 获取指定实体下的类型
 * 
 * @export
 * @param {entityId} entityId
 * @returns {Promise}
 */
export function fetchEntityTypes (entityId) {
  let fd = new FormData()
  fd.append('entityid', entityId)
  return Vue.http.post(`${prefix}/gettypes`, fd)
}

/**
 * 获取指定实体类型下的新增表单协议
 * 
 * @export
 * @param {String} entityId
 * @param {String} entityTypeId
 * @returns {Promise}
 */
export function fetchEntityAddProtocal (entityId, entityTypeId) {
  return Vue.http.post(`${prefix}/allocateadd`, {
    entityId,
    entityTypeId
  })
}

/**
 * 保存实体表单（新增编辑通用）
 * 
 * @export
 * @param {Object} { entityId, entityTypeId, jsonData }
 * @returns {Promise}
 */
export function saveEntityData ({ entityId, entityTypeId, jsonData }) {
  return Vue.http.post(`${prefix}/save`, { entityId, entityTypeId, jsonData })
}

/**
 * 获取指定实体列表数据
 * 
 * @export
 * @param {String} entityId
 * @param {Object} queryData
 * @returns {Promise}
 */
export function fetchEntityList (entityId, queryData) {
  return new Promise(function (resolve, reject) {
    setTimeout(_ => resolve({
      records: [
        {
          cust: '中国移动通信集团公司',
          area: '广东省广州市',
          cat: '运营商',
          scale: '2000-10000',
          phone: '020-68888888',
          website: 'www.10086.com'
        },
        {
          cust: '中国移动通信集团公司',
          area: '广东省广州市',
          cat: '运营商',
          scale: '2000-10000',
          phone: '020-68888888',
          website: 'www.10086.com'
        }
      ],
      columns: [
        { title: '客户', key: 'cust' },
        { title: '行政区域', key: 'area' },
        { title: '所属行业', key: 'cat' },
        { title: '客户规模', key: 'scale' },
        { title: '电话', key: 'phone' },
        { title: '网址', key: 'website' }
      ]
    }), 350)
  })
}
