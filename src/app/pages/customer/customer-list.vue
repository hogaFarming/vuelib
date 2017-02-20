<template>
  <entity-common-list
    :entityId="entityId"
    :entityName="entityName"
    :filters="filters"
    :searchConfig="searchConfig"
    :records-can-delete="recordsCanDelete"
    @select-change="onSelectChange">

    <!--<div slot="filters">-->
      <select v-model="selectedType" slot="filters">
        <option v-for="t in types" :value="t.value">{{t.name}}</option>
      </select>
    <!--</div>-->
    <x-button @click="transfer" :disabled="disableTransfer" slot="buttons">转移客户</x-button>
  </entity-common-list>
</template>

<script>
  import EntityCommonList from '../entity-template/entity-common-list'

  export default {
    data () {
      return {
        entityId: '78c85b5f-0146-1bcf-a8da-8993632d529c',
        entityName: '客户',
        searchConfig: {
          entityKey: 'custname',
          placeholder: '请输入关键字'
        },
        types: [
          { name: '所有客户', value: '1' },
          { name: '我的客户', value: '2' }
        ],
        selectedType: '1',

        selectedRecords: []
      }
    },

    computed: {
      filters () {
        return {
          custType: this.selectedType
        }
      },

      disableTransfer () {
        const IS_SIGN = 1
        return !this.selectedRecords.length ||
          this.selectedRecords.some(item => item.status === IS_SIGN)
      }
    },

    methods: {
      onSelectChange (selectedRecords) {
        this.selectedRecords = selectedRecords
      },

      recordsCanDelete (selectedRecords) {
        const IS_NOT_SIGN = 0
        return selectedRecords.length &&
          selectedRecords.every(item => item.status === IS_NOT_SIGN)
      },

      transfer () {
        // 转移选中客户
        console.log('转移客户')
      }
    },

    components: {
      'entity-common-list': EntityCommonList
    }
  }
</script>
