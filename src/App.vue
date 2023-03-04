<script setup lang="ts">
import { ref } from 'vue';
import About from './components/About.vue';
import Collapsable from './components/Collapsable.vue';
import MainMap from './components/MainMap.vue';
import Popup from './components/Popup.vue';
import Sidebar from './components/Sidebar.vue';

const about_popup = ref(false)
</script>

<template>
  <div class="layout">
    <Collapsable>
      <Sidebar @open_popup="about_popup = true"/>
    </Collapsable>
    <MainMap />
    <Popup v-if="about_popup" @close="about_popup = false">
      <About />
    </Popup>
  </div>
</template>

<style scoped>
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
