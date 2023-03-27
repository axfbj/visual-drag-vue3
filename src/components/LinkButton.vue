<template>
  <div>
    <el-row>
      <el-button type="text" @click="loadUrl('containerLayout')">page1</el-button>
      <el-button type="text">page2</el-button>
    </el-row>
    <!-- <button
      class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"
    >
      111
    </button> -->
    <!--  <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-row> -->
  </div>
</template>

<script setup lang="ts" name="LinkButton">
  import { useRouter } from 'vue-router'
  const $router = useRouter()
  function loadUrl(name: string) {
    $router.push({ name })
  }
  // import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
  .a {
    background-color: $bc !important;
  }
</style>
