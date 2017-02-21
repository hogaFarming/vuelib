<template>
  <div>
    <div class="l-cnt">
      <div class="l-cnt__title-bar">实体列表</div>
      <div class="l-cnt__main">
        <div class="toolbar u-cf">
          <x-button @click="modalVisible = true">新增</x-button>
          <div class="toolbar__right">
            <div class="toolbar__search search">
              <input class="search__input" type="text" v-model="keyword" placeholder="输入实体名称"
              ><x-button @click="search" class="search__button">搜索</x-button>
            </div>
          </div>
        </div>
        <x-table
          :selectable="true"
          :records="records"
          :columns="columns"
          @select-change="onSelectChange"
          @cell-click="onCellClick"
        ></x-table>
      </div>
    </div>
    <x-modal
      :visible="modalVisible"
      title="新增实体"
      @cancel="modalVisible = false"
      @confirm="onModalConfirm">
      <div class="dyform">
        <div class="dyform__field">
          <div class="dyform__label">实体名称</div>
          <div class="dyform__control">
            <x-input v-model="formModel.entityName"></x-input>
          </div>
        </div>
        <div class="dyform__field">
          <div class="dyform__label">实体类型</div>
          <div class="dyform__control">
            <select class="x-select" v-model="formModel.entityType" style="width: 100%;">
              <option v-for="t in entityTypes" :value="t.value">{{t.label}}</option>
            </select>
          </div>
        </div>
        <div class="dyform__field">
          <div class="dyform__label">关联实体</div>
          <div class="dyform__control">
            <select class="x-select" v-model="formModel.relateEntity" style="width: 100%;">
              <option v-for="t in allEntities" :value="t.value">{{t.label}}</option>
            </select>
          </div>
        </div>
        <div class="dyform__field">
          <div class="dyform__label">描述</div>
          <div class="dyform__control">
            <textarea class="x-input" v-model="formModel.desc" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
    </x-modal>
  </div>
</template>
<script>
  import commonApi from 'api'
  const columns = [
    { title: '实体名称', key: 'entityname', type: 'link' },
    { title: '实体类型', key: 'typename' },
    { title: '关联实体', key: 'relentityid' },
    { title: '发布状态', key: 'recstatus' },
    { title: '描述', key: 'remark' }
  ]
  export default {
    data () {
      return {
        keyword: '',
        pageIndex: 1,
        pageSize: 10,

        records: [],
        columns: columns,
        selectedRecords: [],

        modalVisible: false,
        isEdit: false,
        modalTitle: '',
        entityTypes: [
          { label: '独立实体', value: 1001 },
          { label: '嵌套实体', value: 1002 },
          { label: '应用实体', value: 1003 },
          { label: '动态实体', value: 1004 }
        ],
        allEntities: [],
        formModel: {
          entityName: '',
          entityType: 0,
          relateEntity: '',
          desc: ''
        }
      }
    },

    mounted () {
      this.fetchListData()
      this.fetchAllEntities()
    },

    methods: {
      fetchListData () {
        const params = {
          pageIndex: 1,
          pageSize: 10,
          entityName: '',
//          typeName: '',
          status: 1
        }
        commonApi.fetchEntities(params)
          .then(response => {
            const result = response.body
            if (result.statusCode === 0) {
              // 成功
              result.data.forEach(item => {
                item.recstatus = item.recstatus === 1 ? '已发布' : '未发布'
              })
              this.records = result.data
            }
          })
      },
      fetchAllEntities () {
        const params = {
          pageIndex: 1,
          pageSize: 999,
          entityName: '',
          typeName: '',
          status: 1
        }
        commonApi.fetchEntities(params)
          .then(response => {
            const result = response.body
            if (result.statusCode === 0) {
              // 成功
              this.allEntities = [{label: '无', value: ''}].concat(result.data.map(
                item => ({ label: item.entityname, value: item.entityid })
              ))
            }
          })
      },
      search () {
        this.fetchListData()
      },
      onSelectChange () {

      },
      onCellClick (event) {
        if (event.key === 'entityname') {
          this.$router.push(`entity/${event.record.entityid}`)
        }
      },
      onModalConfirm () {
        const params = {
          EntityName: this.formModel.entityName,
          EntityTable: 'table' + new Date().getTime(),
          TypeId: this.formModel.entityType,
          Remark: this.formModel.desc,
          Styles: '',
          Icons: '',
          RelentityId: this.formModel.relateEntity || '00000000-0000-0000-0000-000000000000',
          Perfix: '',
          ReleaseStatus: 0
        }
        commonApi.addEntity(params)
          .then(response => {
            console.info(response)
          })
      }
    }
  }
</script>
