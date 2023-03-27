<template>
  <!-- namespace="ep" -->
  <el-config-provider>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <LinkButton />
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
  // import HelloWorld from '@/components/HelloWorld.vue'
  import LinkButton from '@/components/LinkButton.vue'
</script>

<style lang="scss" scoped></style>
