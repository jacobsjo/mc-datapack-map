<script setup lang="ts">
import Collapsable from './components/Collapsable.vue';
import MainMap from './components/MainMap.vue';
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <div class="layout">
    <Collapsable>
      <Sidebar />
    </Collapsable>
    <MainMap />
  </div>
</template>

<style scoped>
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
