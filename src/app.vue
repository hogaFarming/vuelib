<template>
  <div id="app">
    <div class="app-nav">
      <ul>
        <li><a href="#btn">Button 按钮</a></li>
        <li><a href="#icon">Icon 图标</a></li>
        <li><a href="#grid">栅格布局</a></li>
        <li><a href="#breadcrumb">面包屑</a></li>
      </ul>
    </div>
    <div class="app-main">
      <section id="btn">
        <h2 class="section-title">按钮</h2>
        <x-button @click="handleBtnClick" :disabled="true">default</x-button>
        <x-button type="primary" :disabled="true">primary</x-button>
        <x-button type="success">success</x-button>
        <x-button type="info">info</x-button>
        <x-button type="danger">danger</x-button>
        <x-button type="warning">warning</x-button>
      </section>

      <section id="icon">
        <h2 class="section-title">图标</h2>
        <x-icon name="beer"></x-icon>
        <x-button type="primary">
          <x-icon name="pencil"></x-icon>编辑
        </x-button>
      </section>

      <section id="grid">
        <h2 class="section-title">栅格布局</h2>
        <x-row>
          <x-col :span="4" :offset="4" :pull="2">span 4 offset 4</x-col>
          <x-col :span="4">span 4</x-col>
          <x-col :span="4">span 4</x-col>
          <x-col :span="4" :push="4">span 4</x-col>
        </x-row>
      </section>

      <section id="grid">
        <h2 class="section-title">面包屑</h2>
        <x-breadcrumb></x-breadcrumb>
      </section>
    </div>
  </div>
</template>

<script>
import Button from './components/button'
import Icon from './components/icon'
import { Row, Col } from './components/grid'
import BreadCrumb from './components/breadcrumb'

export default {
  name: 'app',
  components: {
    'x-button': Button,
    'x-icon': Icon,
    'x-row': Row,
    'x-col': Col,
    'x-breadcrumb': BreadCrumb
  },

  methods: {
    handleBtnClick (e) {
      console.log(e.target.tagName)
    }
  }
}
</script>

<style>
  .app-main .x-btn .fa {
    margin-right: 5px;
  }
  .app-main .x-col {
    padding: 10px;
    border-radius: 3px;
  }
  .app-main .x-col:nth-child(2n+1) {
    background: #ddd;
  }
  .app-main .x-col:nth-child(2n) {
    background: #eee;
  }
</style>
