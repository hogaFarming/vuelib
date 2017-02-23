<template>
  <div class="x-table-wrap">
    <table class="x-table">
      <tr>
        <th v-if="selectable">
          <input type="checkbox"
            :checked="isAllSelected"
            @change="handleSelectAll">
        </th>
        <th v-for="col in columns">
          <span>{{col.title}}</span>
        </th>
      </tr>
      <tr v-for="(record, index) in records">
        <td v-if="selectable">
          <input type="checkbox"
            :value="index"
            @change="handleSelect($event, record)"
            v-model="selectedIndex">
        </td>
        <td v-for="col in columns">
          <input type="checkbox" v-if="col.type === 'checkbox'"
            v-model.number="record[col.key]">
          <span v-if="col.operations">
            <span class="x-table__operation" v-for="op in col.operations" @click="op.handler(record)">{{op.name}}</span>
          </span>
          <span v-if="!col.operations && !col.type"
            :class="{'x-table__link': col.type === 'link'}"
            @click="onCellClick(record, col.key)">
            {{record[col.key]}}
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<style src="./table.css"></style>

<script>
  export default {
    props: ['records', 'columns', 'selectable'],

    data () {
      return {
        // isAllSelected: false,
        selectedIndex: []
      }
    },

    computed: {
      isAllSelected () {
        return this.records.length && this.records.every((_, index) => {
          return this.selectedIndex.indexOf(index) !== -1
        })
      }
    },

    watch: {
      selectedIndex (newValue) {
        let selectedRecords = []
        this.records.forEach((record, index) => {
          if (newValue.indexOf(index) !== -1) {
            selectedRecords.push(record)
          }
        })
        this.$emit('select-change', selectedRecords)
      }
    },

    mounted () {

    },

    methods: {
      handleSelectAll (e) {
        const checked = e.target.checked
        if (checked) {
          this.selectedIndex = this.records.map((_, i) => i)
        } else {
          this.selectedIndex = []
        }
      },

      handleSelect (evt, record) {
      },

      onCellClick (record, key) {
        this.$emit('cell-click', { record, key })
      }
    }
  }
</script>
