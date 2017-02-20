<template>
  <div>
    <div class="toolbar">
      <x-input v-model="newType.name" placeholder="请输入类型名称"></x-input>
      <x-button @click="add">添加</x-button>
    </div>
    <ul>
      <li v-for="t in types">
        {{t.order}}
        {{t.name}}
        {{t.status === 1 ? '已启用' : '已禁用'}}
      </li>
    </ul>
  </div>
</template>
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
      }
    }
  }
</script>
