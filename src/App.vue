<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import About from './components/About.vue';
import Collapsable from './components/Collapsable.vue';
import MainMap from './components/MainMap.vue';
import Popup from './components/Popup.vue';
import Sidebar from './components/Sidebar.vue';
import { useLoadedDimensionStore } from './stores/useLoadedDimensionStore';

const about_popup = ref(false)

const loaded = ref(false)

onBeforeMount(async () => {
  const loadedDimensionStore = useLoadedDimensionStore()
  await loadedDimensionStore.reload()
  loaded.value = true
})

</script>

<template>
  <div class="layout" v-if="loaded">
    <Collapsable>
      <Sidebar @open_popup="about_popup = true" />
    </Collapsable>
    <MainMap />
    <Popup v-if="about_popup" @close="about_popup = false">
      <About />
    </Popup>
  </div>
  <div class="layout loading" v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
}

.loading{
  font-size: 5rem;
  color: white;
  align-items: center;
  justify-content: center;
}

p{
  height: fit-content;
}
</style>
