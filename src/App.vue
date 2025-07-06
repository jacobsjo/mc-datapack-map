<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import Collapsable from './components/Collapsable.vue';
import MainMap from './components/MainMap.vue';
import Sidebar from './components/Sidebar.vue';
import { useLoadedDimensionStore } from './stores/useLoadedDimensionStore';
import { useUiStore } from './stores/useUiStore';
import Popup from './components/Popup.vue';
import ModrinthMenu from './components/modrinth/ModrinthMenu.vue';

const loaded = ref(false)

const uiStore = useUiStore()

onBeforeMount(async () => {
  const loadedDimensionStore = useLoadedDimensionStore()
  await loadedDimensionStore.reload()
  loaded.value = true

})

</script>

<template>
  <div class="layout" v-if="loaded">
    <Collapsable>
      <Sidebar />
    </Collapsable>
    <MainMap />
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
