<template>
  <div>
    <div class="toolbar">
      <x-input v-model="newType.name" placeholder="请输入类型名称"></x-input>
      <x-button @click="add">添加</x-button>
    </div>
    <ul class="slim-list">
      <li v-for="(t, index) in types" class="slim-list__row">
        <span class="slim-list__order">{{index + 1}}</span>
        <span class="slim-list__text">{{t.categoryname}}</span>
        <x-icon class="slim-list__ctrl" name="arrow-up" @click="orderUp(t, index)"
                :style="{visibility: index ? 'visible' : 'hidden'}"></x-icon>
        <x-icon class="slim-list__ctrl" name="arrow-down" @click="orderDown(t, index)"
                :style="{visibility: index === types.length - 1 ? 'hidden' : 'visible'}">
        </x-icon>
        <x-icon class="slim-list__ctrl" name="ban" @click="toggle(t, index)"></x-icon>
        <x-icon class="slim-list__ctrl" name="edit" @click="edit(t, index)"></x-icon>
        <x-icon class="slim-list__ctrl" name="trash" @click="remove(t, index)"></x-icon>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  .slim-list {
    padding-left: 15px;
  }
</style>
<script>
  import commonApi from 'api'
  export default {
    data () {
      return {
        types: [],
        newType: {
          name: ''
        }
      }
    },
    mounted () {
      this.fetchTypes()
    },
    methods: {
      fetchTypes () {
        commonApi.fetchEntityTypes2(this.$route.params.id)
          .then(response => {
            this.types = response.body.data
          })
      },
      add () {
        if (!this.newType.name) {
          return console.error('请输入名称')
        }
        commonApi.addEntityType(this.newType.name, this.$route.params.id)
          .then(response => console.log(response))
      },
      edit (item, index) {

      },
      orderUp (item, index) {

      },
      orderDown (item, index) {

      },
      remove (item, index) {

      }
    }
  }
</script>
