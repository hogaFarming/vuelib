<template>
  <div>
    <!-- step.1 选择实体类型 -->
    <x-modal
      ref="typeModal"
      title="选择类型"
      :visible="typeModalVisible"
      @cancel="currStep = 0"
      @confirm="onTypeConfirm">
      <select v-model="selectedType">
        <option v-for="t in entityTypes" :value="t.value">
          {{t.name}}
        </option>
      </select>
    </x-modal>
    <!-- step.2 填写表单 -->
    <x-modal
      ref="formModal"
      :title="'新增' + entityName"
      :visible="formModalVisible"
      @cancel="currStep = 1"
      @confirm="onFormConfirm">
      <dynamic-form
        ref="dyform"
        :fields="addProtocal.fields || []"
        v-model="addFormData">
      </dynamic-form>
    </x-modal>
  </div>
</template>

<script>
  import commonApi from 'api'

  const STEP_INIT = 0
  const STEP_TYPE = 1
  const STEP_FORM = 2

  export default {
    props: ['entityId', 'entityName'],
  
    data () {
      return {
        currStep: STEP_INIT,
        entityTypes: [],
        selectedType: '',
        typeModalVisible: false,
        formModalVisible: false,
        addProtocal: {},
        addFormData: {},
        promiseResolve: null
      }
    },

    watch: {
      currStep (step, prevStep) {
        debugger
        switch (step) {
          case STEP_INIT:
            this.clearState()
            break
          case STEP_TYPE:
            this.typeModalVisible = true
            this.formModalVisible = false
            if (prevStep === STEP_INIT) {
              commonApi.fetchEntityTypes(this.entityId)
                .then(result => {
                  this.entityTypes = result
                })
            }
            break
          case STEP_FORM:
            this.formModalVisible = true
            commonApi.fetchEntityAddProtocal(this.entityId, this.selectedType)
              .then(protocal => {
                this.addProtocal = protocal
              })
        }
      }
    },

    mounted () {
      // commonApi.fetchEntityAddProtocal()
      //   .then(protocal => {
      //     this.addProtocal = protocal
      //   })
    },

    methods: {
      clearState () {
        this.currStep = STEP_INIT
        this.entityTypes = []
        this.selectedType = ''
        this.typeModalVisible = false
        this.formModalVisible = false
        this.addProtocal = {}
        this.addFormData = {}
        this.promiseResolve = null
      },
      
      // 外部调用，开始弹窗
      open () {
        this.currStep = STEP_TYPE
        return new Promise((resolve, reject) => {
          this.promiseResolve = resolve
        })
      },

      onTypeConfirm () {
        if (!this.selectedType) return alert('请选择类型')
        this.currStep = STEP_FORM
      },
      
      onFormConfirm () {
        const errors = this.$refs.dyform.validate()
        if (errors.length) {
          console.error(errors)
          return
        } else {
          const params = {
            entityId: this.entityId,
            entityTypeId: this.selectedType,
            jsonData: this.addFormData
          }
          console.info('提交表单...', this.addFormData)
          commonApi.saveEntityData(params)
            .then(result => {
              console.info('保存成功')
              this.promiseResolve()
            })
        }
      }
    }
  }
</script>
