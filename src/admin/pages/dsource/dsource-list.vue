<template>
  <div>
    <div class="l-cnt">
      <div class="l-cnt__main">
        <div class="toolbar">
          <x-select v-model="currMenu">
            <option value="1">启用</option>
            <option value="2">停用</option>
          </x-select>
          <x-button @click="add">新增</x-button>
          <div class="toolbar__right">
            <div class="toolbar__search search">
              <input class="search__input" type="text" v-model="keyword" placeholder="请输入数据源名称"
              ><x-button @click="search" class="search__button">搜索</x-button>
            </div>
          </div>
        </div>

        <x-table :selectable="true"
                 :records="records"
                 :columns="columns"
                 @select-change="onSelectChange"
                 @cell-click="onCellClick"></x-table>

      </div>
    </div>
  </div>
</template>

<script>
  const columns = [
    { title: '序号', key: 'order' },
    { title: '数据源名称', key: 'name', type: 'link' },
    { title: '类型', key: 'order' },
    { title: '状态', key: 'order' },
    { title: '描述', key: 'order' }
  ]
  export default {
    data () {
      return {
        currMenu: 1,
        keyword: '',
        records: [],
        columns
      }
    },

    methods: {
      fetchList () {

      }
    }
  }
</script>
