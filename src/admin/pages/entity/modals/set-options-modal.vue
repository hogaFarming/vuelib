<template>
  <x-modal
    title="选项值设定"
    :visible="visible"
    @cancel="onCancel"
    @confirm="onConfirm">
    <div class="toolbar">
      <x-input v-model="newOption" placeholder="请输入选项值" :maxlength="20"></x-input>
      <x-button @click="add">添加</x-button>
    </div>
    <ul class="slim-list">
      <li class="slim-list__row" v-for="(t, index) in options">
        <span class="slim-list__order">{{index+1}}</span>
        <span class="slim-list__text" v-if="!isEdit">{{t.label}}</span>
        <x-input class="slim-list__text" v-if="isEdit" v-model="t._label"></x-input>
        <x-icon class="slim-list__ctrl" name="arrow-up" @click="orderUp(t, index)"
                :style="{visibility: index ? 'visible' : 'hidden'}"></x-icon>
        <x-icon class="slim-list__ctrl" name="arrow-down" @click="orderDown(t, index)"
                :style="{visibility: index === options.length - 1 ? 'hidden' : 'visible'}">
        </x-icon>
        <x-icon class="slim-list__ctrl" name="edit" @click="edit(t, index)"></x-icon>
        <x-icon class="slim-list__ctrl" name="trash" @click="remove(t, index)"></x-icon>
      </li>
    </ul>
  </x-modal>
</template>
<script>
  import _ from 'lodash'
  export default {
    data () {
      return {
        visible: false,
        newOption: '',
        options: [],
        promiseResolve: null,
        promiseReject: null,
        contextId: '0000-123123',
        isEdit: false
      }
    },
    watch: {
      visible (val) {
        if (!val) this.resetState()
      }
    },
    methods: {
      add () {
        const newOpt = {
          label: this.newOption || ('new opt' + this.options.length),
          value: this.options.length
        }
        this.options.push(newOpt)
      },
      edit () {
        this.isEdit = true
      },
      orderUp () {

      },
      orderDown () {

      },
      remove () {

      },
      resetState () {
        const defaultState = {
          newOption: '',
          options: [],
          promiseResolve: null,
          promiseReject: null,
          contextId: '',
          isEdit: false
        }
        _.keys(defaultState, key => {
          this[key] = defaultState[key]
        })
      },
      open (contextId) {
        this.visible = true
        return new Promise((resolve, reject) => {
          this.promiseResolve = resolve
          this.promiseReject = reject
        })
      },
      onCancel () {
        this.visible = false
        this.promiseReject('cancel')
      },
      onConfirm () {
        this.visible = false
        this.promiseResolve({
          id: this.contextId,
          options: this.options,
          optionsStr: this.options.map(o => o.label).join(';')
        })
      }
    }
  }
</script>
