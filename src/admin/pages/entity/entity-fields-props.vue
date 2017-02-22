<template>
  <div>
    <div class="toolbar">
      <x-button>按类型设置</x-button>
      <x-button>按职能设置</x-button>
      <div class="toolbar__right">
        <x-button>生效</x-button>
        <x-button>引用</x-button>
      </div>
    </div>
    <x-row>
      <x-col :span="4">
        <ul class="lefttabs">
          <li class="lefttabs__item" v-for="t in entityTypes" @click="currType = t" :class="{'lefttabs__item_active': t === currType}">
            {{t.categoryname}}
          </li>
        </ul>
      </x-col>
      <x-col :span="20">
        <x-table
          :records="fields"
          :columns="columns"
        ></x-table>
      </x-col>
    </x-row>
  </div>
</template>
<style>
  .lefttabs {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: 0 10px;
    border: 1px solid #f9f9f9;
  }
  .lefttabs__item {
    background: #f9f9f9;
    padding: 12px 14px;
    border-left: 5px solid #f9f9f9;
    font-size: 14px;
    cursor: pointer;
  }
  .lefttabs__item_active {
    border-color: #3398db;
    background: #fff;
  }
</style>
<script>
  import commonApi from 'api'
  const columns = [
    { title: '序号', key: 'order' },
    { title: '字段名称', key: 'order' },
    { title: '是否使用', key: 'order' },
    { title: '新增显示', key: 'order' },
    { title: '必填', key: 'order' },
    { title: '只读', key: 'order' },
    { title: '编辑必填', key: 'order' },
    { title: '只读', key: 'order' },
    { title: '查看', key: 'order' },
    { title: '显示', key: 'order' }
  ]
  export default {
    data () {
      return {
        entityTypes: [],
        currType: {},
        roles: [],
        fields: [],
        columns
      }
    },
    mounted () {
      this.fetchTypes()
    },
    watch: {
      currTypes () {
        this.fetchFields()
      }
    },
    methods: {
      fetchTypes () {
        commonApi.fetchEntityTypes2(this.$route.params.id)
          .then(response => {
            this.entityTypes = response.body.data
            this.currType = this.entityTypes[0]
          })
      },
      fetchFields () {
        
      }
    }
  }
</script>
