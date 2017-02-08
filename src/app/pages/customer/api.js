import protocal from './protocal'

export function getCustList () {
  return Promise.resolve({
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
  })
}

export function getAddProtocal () {
  return Promise.resolve(protocal)
}
