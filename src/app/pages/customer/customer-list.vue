<template>
  <div class="custlist">
    <div class="custlist-title">
      {{title}}
    </div>
    <div class="custlist-cnt">
      <div class="custlist-cnt-title">{{title}}</div>
      <div class="toolbar">
        <div class="toolbar-left">
          <x-button type="primary">新增客户</x-button>
          <x-button type="primary">合并客户</x-button>
          <x-button type="primary">批量合并</x-button>
          <x-button type="primary">字段设置</x-button>
        </div>
      </div>
      <x-table
        :selectable="true"
        :records="records"
        :columns="columns"
        @selectionChange="onSelectionChange">
      </x-table>
    </div>
    <x-modal title="新增客hu" :visible="true">
      <p>helelo</p>
    </x-modal>
  </div>
</template>

<style>
  .custlist-title {
    padding: 15px 20px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1;
    background: #f9f9f9;
  }
  .custlist-cnt {
    margin: 0 15px;
    background: #fff;
  }
  .custlist-cnt-title {
    line-height: 50px;
    padding: 0 15px;
  }
  .toolbar {
    padding: 18px 15px 30px;
    border-top: 1px solid #f0f2f4;
  }
  .toolbar-left {
    /*padding-left: 15px;*/
  }
  .toolbar-left .x-btn {
    margin-right: 5px;
  }
</style>

<script>
  let records = [
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
  ]

  let columns = [
    { title: '客户', key: 'cust' },
    { title: '行政区域', key: 'area' },
    { title: '所属行业', key: 'cat' },
    { title: '客户规模', key: 'scale' },
    { title: '电话', key: 'phone' },
    { title: '网址', key: 'website' }
  ]

  export default {
    data () {
      return {
        records,
        columns,
        title: '客户列表'
      }
    },

    methods: {
      onSelectionChange (selectedRecords) {
        console.log(selectedRecords)
      }
    }
  }
</script>
