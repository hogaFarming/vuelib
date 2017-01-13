export default [
  { name: '首页', icon: 'home', action: '/' },
  {
    name: 'CRM',
    icon: 'gift',
    sub: [
      { name: '客户', action: '/customer' },
      { name: '商机', action: '/customer' },
      { name: '合同', action: '/customer' }
    ]
  },
  {
    name: '办公',
    icon: 'gift',
    sub: [
      { name: '公告通知', action: '/notice' },
      {
        name: '工作报告',
        sub: [
          { name: '周报' },
          { name: '日报' }
        ]
      },
      { name: '知识库', action: '/notice' },
      { name: '考勤', action: '/notice' },
      {
        name: '审批',
        action: '/notice',
        sub: [
          { name: '我的申请' },
          { name: '收到的申请' }
        ]
      }
    ]
  },
  {
    name: '报表',
    icon: 'gift',
    sub: [
      { name: '业绩完成情况' },
      { name: '业绩完成情况' },
      { name: '业绩完成情况' },
      { name: '业绩完成情况' },
      { name: '业绩完成情况' },
      { name: '业绩完成情况' },
      { name: '业绩完成情况' },
      { name: '业绩完成情况' }
    ]
  }
]
