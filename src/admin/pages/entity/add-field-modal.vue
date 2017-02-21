<template>
  <x-modal
    :visible="modalVisible"
    title="新增字段"
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


    <x-form v-model="mFormModel">
      <x-form-field label="选择字段格式" key="FieldType" required>
        <select>
          <option v-for="t in types" :value="t.value">{{t.label}}</option>
        </select>
      </x-form-field>
    </x-form>
  </x-modal>
</template>
<script>
  export default {

  }
</script>

