<script setup lang="ts">
  defineProps<{ msg: string }>()
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style lang="scss" scoped>
  .read-the-docs {
    color: #888;
  }
</style>
