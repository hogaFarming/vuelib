<template>
  <div class="custlist">
    <div class="custlist-title">
      {{title}}
    </div>
    <div class="custlist-cnt">
      <div class="custlist-cnt-title">{{title}}</div>
      <div class="toolbar">
        <div class="toolbar-left">
          <x-button type="primary" @click="addCust">新增客户</x-button>
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
    <add-cust-modal v-model="addFormVisible" @cancel="onAddCancel" @confirm="onAddConfirm"></add-cust-modal>
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
  import AddCustModal from './add-cust-modal'
  import * as api from './api'

  export default {
    components: {
      'add-cust-modal': AddCustModal
    },

    data () {
      return {
        records: [],
        columns: [],
        title: '客户列表',
        addFormVisible: true
      }
    },

    mounted () {
      api.getCustList()
        .then(data => {
          this.records = data.records
          this.columns = data.columns
        })
    },

    methods: {
      onSelectionChange (selectedRecords) {
        console.log(selectedRecords)
      },

      addCust () {
        this.addFormVisible = true
        // this.$modal({
        //   component: CustAdd,
        //   beforeOpen () {
        //     return true
        //   },
        //   onCancel () {
        //   },
        //   onConfirm () {

        //   }
        // }).then()
      },
      onAddCancel () {
      },
      onAddConfirm () {
      }
    }
  }
</script>
