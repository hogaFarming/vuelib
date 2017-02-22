<template>
  <div>
    <x-modal
      :visible="visible"
      title="新增字段"
      @cancel="$emit('close')"
      @confirm="onModalConfirm">

      <x-form v-model="formModel">
        <!-- 基本属性 -->
        <x-form-field label="选择字段格式" required>
          <select class="x-select" v-model.number="formModel.controlType">
            <option v-for="t in controlTypes" :value="t.value">{{t.name}}</option>
          </select>
        </x-form-field>
        <x-form-field label="字段名称" required>
          <x-input v-model="formModel.fieldLabel"></x-input>
        </x-form-field>
        <x-form-field label="显示名称" required>
          <x-input v-model="formModel.displayName"></x-input>
        </x-form-field>
        <x-form-field label="状态" required>
          <select class="x-select" v-model.number="formModel.recStatus">
            <option :value="1">启用</option>
            <option :value="0">禁用</option>
          </select>
        </x-form-field>

        <!-- 包装为fieldConfig参数 -->
        <x-form-field label="字段长度" v-if="extra.maxLength" required>
          <select class="x-select" v-model.number="extraConfig.maxLength">
            <option :value="20">20</option>
            <option :value="50">50</option>
            <option :value="100">100</option>
            <option :value="200">200</option>
            <option :value="500">500</option>
            <option :value="1000">1000</option>
          </select>
        </x-form-field>
        <x-form-field label="小数点位数" v-if="extra.decimalsLength" required>
          <x-input v-model="extraConfig.decimalsLength"></x-input>
        </x-form-field>
        <x-form-field label="选项值" v-if="extra.dataSource" required>
          <x-input :value="extraConfig.dataSource.options.map(o => o.label).join(';')" readOnly @click="setOptions"></x-input>
        </x-form-field>
        <x-form-field label="默认值" v-if="extra.defaultValue" required>
          <x-input v-model="extraConfig.defaultValue"></x-input>
        </x-form-field>
        <x-form-field label="提示内容" v-if="extra.tipContent" required>
          <textarea v-model="extraConfig.tipContent" cols="30" rows="6" class="x-input x-input_textarea" :style="{color: extraConfig.tipColor}"></textarea>
        </x-form-field>
        <x-form-field label="字体颜色" v-if="extra.tipColor" required>
          <x-input v-model="extraConfig.tipColor" type="color"></x-input>
        </x-form-field>

        <x-form-field label="自动生成列表名">
          <input type="checkbox" v-model="autoFieldName"> 自动
        </x-form-field>
        <x-form-field label="字段列名" required v-if="!autoFieldName">
          <x-input v-model="formModel.fieldName"></x-input>
        </x-form-field>
      </x-form>
    </x-modal>
    <set-options-modal ref="setOptionsModalRef"></set-options-modal>
  </div>
</template>
<style>
  .x-form .x-select,
  .x-form .x-input {
    width: 100%
  }
</style>
<script>
  import _ from 'lodash'
  import commonApi from 'api'
  import SetOptionsModal from './modals/set-options-modal'
  const controlTypes = [
    { name: '文本', value: 1 },
    { name: '提示文本', value: 2, extra: ['tipContent', 'tipColor'] },
    { name: '单选', value: 3, extra: ['dataSource'] },
    { name: '多选', value: 4, extra: ['dataSource'] },
    { name: '大文本', value: 5, extra: ['defaultValue'] },
    { name: '整数文本', value: 6, extra: ['maxLength', 'defaultValue'] },
    { name: '小数文本', value: 7, extra: ['maxLength', 'decimalsLength', 'defaultValue'] }
    // { name: '日期', value: 8, extra: ['format', 'defaultValue'] },
    // { name: '日期时间', value: 9, extra: ['format', 'defaultValue'] },
    // { name: '手机号', value: 10 },
    // { name: '邮箱', value: 11 },
    // { name: '电话', value: 12 },
    // { name: '地址', value: 13 },
    // { name: '定位', value: 14 },
    // { name: '头像', value: 15 },
    // { name: '行政区域', value: 16 },
    // { name: '团队组织', value: 17 },
    // { name: '数据源单选', value: 18 },
    // { name: '分组', value: 19 },
    // { name: '树形控件', value: 20 },
    // { name: '图片控件', value: 21 },
    // { name: '附件控件', value: 22 },
    // { name: '表格控件', value: 23 },
    // { name: '单选人控件', value: 24 },
    // { name: '多选人控件', value: 25 },
    // { name: '树形控件多选', value: 26 }
  ]

  function getDefaultState () {
    return {
      formModel: {
        controlType: 1,
        fieldLabel: '',
        displayName: '',
        recStatus: 1, // 1 启用 0 禁用
        fieldName: '',
        fieldType: 2 // 扩展字段固定传2
      },
      extraConfig: {
        maxLength: 50,
        decimalsLength: '',
        defaultValue: '',
        dataSource: {
          type: 'local', // local/server
          id: '',
          options: []
        },
        tipContent: '',
        tipColor: '#999999'
      },
      autoFieldName: true
    }
  }

  export default {
    props: {
      visible: Boolean
    },

    data () {
      return {
        controlTypes,
        ...getDefaultState()
      }
    },

    watch: {
      visible () {
        this.resetForm()
      }
    },

    computed: {
      extra () {
        const selectedType = _.find(controlTypes, t => t.value === this.formModel.controlType)
        const extra = {}
        if (selectedType && selectedType.extra) {
          selectedType.extra.forEach(extItem => { extra[extItem] = true })
        }
        return extra
      }
    },
    
    methods: {
      onModalConfirm () {
        const fieldConfig = _.pickBy(this.extraConfig, (val, key) => this.extra[key])
        this.formModel.fieldConfig = JSON.stringify(fieldConfig)
        this.submitForm()
      },
      submitForm () {
        const params = {
          entityId: this.$route.params.id,
          ...this.formModel
        }
        commonApi.createEntityField(params)
          .then(response => {
            console.log(response)
            this.$emit('close')
          })
      },
      resetForm () {
        const initialState = getDefaultState()
        this.formModel = initialState.formModel
        this.extraConfig = initialState.extraConfig
      },
      setOptions () {
        this.$refs.setOptionsModalRef.open()
          .then(result => {
            const { id, options } = result
            this.extraConfig.dataSource.id = id
            this.extraConfig.dataSource.options = options
          })
      }
    },
    components: {
      'set-options-modal': SetOptionsModal
    }
  }
</script>

