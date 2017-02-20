<template>
  <div>
    <div class="l-cnt">
      <div class="l-cnt__title-bar">{{entityName + '列表'}}</div>
      <div class="l-cnt__main">
        <div class="toolbar u-cf">
          <slot name="filters" class="toolbar__filters"></slot>
          <x-button
            v-for="btn in baseBtns"
            class="toolbar__btn"
            :type="btn.type"
            :disabled="btn.disabled"
            @click="btn.handler">
            {{btn.text}}
          </x-button>
          <slot name="buttons" class="toolbar__btn"></slot>
          <div class="toolbar__right">
            <!--<search
              class="toolbar__search"
              v-model="keyword"
              v-if="searchConfig.entityKey"
              :placeholder="searchConfig.placeholder"
              @search="search">
              搜索
            </search>-->
            <div class="toolbar__search search" v-if="searchConfig.entityKey">
              <input class="search__input" type="text" v-model="keyword" :placeholder="searchConfig.placeholder"
              ><x-button @click="search" class="search__button">搜索</x-button>
            </div>
            <x-button @click="advanceSearch">高级搜索</x-button>
          </div>
        </div>
        <x-table
          :selectable="true"
          :records="records"
          :columns="columns"
          @select-change="onSelectChange">
        </x-table>
      </div>
    </div>
    <common-add :entity-id="entityId" :entity-name="entityName" ref="commonAdd"></common-add>
  </div>
</template>
<style src="./style.css"></style>
<script>
  import commonApi from 'api'
  import CommonAdd from './entity-common-add'
  export default {
    props: {
      // 实体信息
      entityId: String,
      entityName: String,

      // 工具栏配置
      filters: {
        type: Object,
        default: {}
      },
      shownBtns: {
        type: Array,
        default () { return ['add', 'del', 'imp', 'exp'] }
      },
      searchConfig: {
        type: Object,
        default () {
          return {
            entityKey: '', // key
            placeholder: '请输入关键字',
            advanceSearch: true
          }
        }
      },
      recordsCanDelete: {
        type: Function,
        default () {
          return function (selectedRecords) { return true }
        }
      }
    },

    data () {
      return {
        keyword: '',
        records: [],
        columns: [],
        selectedRecords: []
      }
    },

    computed: {
      baseBtns () {
        const sels = this.selectedRecords
        const checkFn = this.recordsCanDelete
        const disableDel = !sels.length || (checkFn && checkFn(sels))
        const defBtns = [
          { action: 'add', handler: this.add, text: '新增' },
          {
            action: 'del',
            handler: this.del,
            text: '删除',
            // type: 'danger',
            disabled: disableDel
          },
          { action: 'imp', handler: this.imp, text: '导入' },
          { action: 'exp', handler: this.exp, text: '导出' }
        ]
        return defBtns.filter(btn => this.shownBtns.indexOf(btn.action) !== -1)
      }
    },

    mounted () {
      this.fetchListData()
    },

    methods: {
      search () {
        this.fetchListData()
      },

      advanceSearch () {
      },

      onSelectChange (selection) {
        this.selectedRecords = selection
        this.$emit('select-change', selection)
      },

      fetchListData () {
        let queryData = { ...this.filters }
        let { entityKey } = this.searchConfig
        if (entityKey) queryData[entityKey] = this.keyword
        commonApi.fetchEntityList(this.entityId, queryData)
          .then(result => {
            this.records = result.records
            this.columns = result.columns
          })
      },

      add () {
        this.$refs.commonAdd.open()
          .then(() => {
            this.fetchListData()
          })
      },

      del () {
        console.log('open add')
      },

      imp () {
        console.log('open add')
      },

      exp () {
        console.log('open add')
      }
    },

    components: {
      'common-add': CommonAdd
    }
  }
</script>
