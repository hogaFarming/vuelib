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
    <add-field-modal :visible="addModalVisible" @close="addModalVisible = false"></add-field-modal>
  </div>
</template>
<script>
  import commonApi from 'api'
  import AddFieldModel from './add-field-modal'
  const columns = [
    { title: '序号', key: 'recorder' },
    { title: '字段名称', key: 'fieldlabel' },
    { title: '显示名称', key: 'displayname' },
    { title: '格式', key: 'controltype' },
    { title: '字段列名', key: 'fieldname' },
    { title: '状态', key: 'recstatus' },
    { title: '操作', key: 'fi3eldname' }
  ]
  export default {
    data () {
      return {
        fields: [],
        columns: columns,
        addModalVisible: false
      }
    },

    mounted () {
      this.fetchFields()
    },

    methods: {
      fetchFields () {
        commonApi.fetchEntityFields(this.$route.params.id)
          .then(response => {
            const result = response.body
            if (result.statusCode === 0) {
              this.fields = result.data
            }
          })
      },
      createField () {
        debugger
        this.addModalVisible = true
      }
    },

    components: { 'add-field-modal': AddFieldModel }
  }
</script>
