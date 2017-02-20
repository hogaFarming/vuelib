<template>
  <div>
    <div class="toolbar">
      <x-button @click="createField">添加字段</x-button>
    </div>
    <x-table
      :records="fields"
      :columns="columns"
      :selectable="true"
    ></x-table>
  </div>
</template>
<script>
  import commonApi from 'api'
  const columns = [
    { title: '序号', key: 'order' },
    { title: '字段名称', key: 'fieldname' },
    { title: '显示名称', key: 'fieldname2' },
    { title: '格式', key: 'fieldname3' },
    { title: '字段列名', key: 'fieldn3ame' },
    { title: '状态', key: 'fieldnam3e' },
    { title: '操作', key: 'fi3eldname' }
  ]
  export default {
    data () {
      return {
        fields: [],
        columns: columns
      }
    },

    mounted () {
      this.fetchFields()
    },

    methods: {
      fetchFields () {
        commonApi.fetchEntityFields()
      },
      createField () {

      }
    }
  }
</script>
