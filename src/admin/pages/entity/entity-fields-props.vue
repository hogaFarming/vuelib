<template>
  <div>
    <div class="toolbar">
      <x-button @click="usage = 0" :class="{active: usage === 0}">按类型设置</x-button>
      <x-button @click="usage = 1" :class="{active: usage === 1}">按职能设置</x-button>
      <div class="toolbar__right">
        <x-button @click="saveFields">生效</x-button>
        <x-button>引用</x-button>
      </div>
    </div>
    <x-row>
      <x-col :span="4">
        <ul class="lefttabs">
          <li class="lefttabs__item" v-for="t in leftTypes" @click="currType = t" :class="{'lefttabs__item_active': t === currType}">
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
    { title: '字段名称', key: 'fieldLabel' },
    { title: '是否使用', key: 'recStatus', type: 'checkbox' },
    { title: '新增显示', key: 'rule-add-isVisible', type: 'checkbox' },
    { title: '必填', key: 'rule-add-isRequired', type: 'checkbox' },
    { title: '只读', key: 'rule-add-isReadOnly', type: 'checkbox' },
    { title: '编辑显示', key: 'rule-edit-isVisible', type: 'checkbox' },
    { title: '必填', key: 'rule-edit-isRequired', type: 'checkbox' },
    { title: '只读', key: 'rule-edit-isReadOnly', type: 'checkbox' },
    { title: '查看显示', key: 'rule-detail-isVisible', type: 'checkbox' }
  ]
  export default {
    data () {
      return {
        usage: 0,
        leftTypes: [],
        currType: {},
        fields: [],
        columns,
        entityId: this.$route.params.id
      }
    },
    mounted () {
      this.fetchTypes()
    },
    watch: {
      usage (val) {
        this.fetchTypes()
      },
      currType () {
        this.fetchFields()
      }
    },
    methods: {
      fetchTypes () {
        return commonApi.fetchEntityTypes2(this.$route.params.id)
          .then(response => {
            this.leftTypes = response.body.data.map(item => ({...item, id: item.categoryid}))
            this.currType = this.leftTypes[0]
          })
      },
      saveFields () {
        let clone = this.fields.map(field => ({...field}))
        clone.forEach((field, index) => {
          debugger          
          field.recStatus = field.recStatus ? 1 : 0
          Object.keys(field).forEach(key => {
            debugger
            let split = key.split('-') // ['rule', 'add', 'isVisible']
            if (split[0] !== 'rule') return

            let ruleIndex = ['add', 'edit', 'detail'].indexOf(split[1])
            if (ruleIndex === -1) return

            let bizKey = split[2]
            let bizVal = field[key] ? 1 : 0
            if (bizKey === 'isVisible') {
              field.rules[ruleIndex].isVisible = bizVal
            } else if (bizKey === 'isRequired') {
              field.rules[ruleIndex].validRule.isRequired = bizVal
            } else if (bizKey === 'isReadOnly') {
              field.rules[ruleIndex].viewRule.isReadOnly = bizVal
            }
            delete clone[index][key]
          })
          delete clone[index].fieldLabel
          field.rules.forEach(rule => {
            rule.viewRule = JSON.stringify(rule.viewRule)
            rule.validRule = JSON.stringify(rule.validRule)
          })
        })
        console.log(JSON.stringify(clone[0]))
        commonApi.saveFieldRules(clone)
          .then(response => {
            console.log(response.body)
          })
      },
      fetchFields () {
        const params = {
          useType: this.usage,
          typeId: this.currType.id,
          entityId: this.entityId
        }
        commonApi.fetchFieldRules(params)
          .then(response => {
            const ruleFields = response.body.data
            return ruleFields
          })
          .then(ruleFields => {
            commonApi.fetchEntityFields(this.entityId)
              .then(response => {
                const noRuleFields = response.body.data.filter(field => {
                  return field.recstatus === 1 && ruleFields.every(f => f.fieldId !== field.fieldid)
                })
                noRuleFields.forEach(initRule)
                const allFields = noRuleFields.concat(ruleFields)
                const allFieldsFlatten = allFields.map(field => {
                  return {
                    ...field,
                    ...flattenRule(field.rules)
                  }
                })
                this.fields = allFieldsFlatten
              })
          })
        const initRule = (field, index, noRuleFields) => {
          const useType = this.usage
          noRuleFields[index] = {
            fieldId: field.fieldid,
            typeId: this.currType.id,
            fieldLabel: field.fieldlabel,
            recStatus: 1,
            rules: [{
              // FieldRulesId: '',
              operateType: 0,
              isVisible: 1,
              useType,
              rulesSub: useType === 1 ? 0 : 1,
              viewRule: {
                isReadOnly: 0
              },
              validRule: {
                isRequired: 0
              }
            }, {
              // FieldRulesId: '',
              operateType: 1,
              isVisible: 1,
              useType,
              rulesSub: useType === 1 ? 0 : 1,
              viewRule: {
                isReadOnly: 0
              },
              validRule: {
                isRequired: 0
              }
            }, {
              // FieldRulesId: '',
              operateType: 2,
              isVisible: 1,
              useType,
              rulesSub: useType === 1 ? 0 : 1,
              viewRule: {
                isReadOnly: 0
              },
              validRule: {
                isRequired: 0
              }
            }]
          }
        }
        function flattenRule (fieldRules) {
          const catMap = ['add', 'edit', 'detail']
          return fieldRules.reduce((retObj, rule, i) => {
            retObj['rule-' + catMap[i] + '-isVisible'] = !!rule.isVisible
            retObj['rule-' + catMap[i] + '-isRequired'] = !!rule.validRule.isRequired
            retObj['rule-' + catMap[i] + '-isReadOnly'] = !!rule.viewRule.isReadOnly
            return retObj
          }, {})
        }
      }
    }
  }
</script>
