<script setup lang="ts">
import { Identifier, XoroshiroRandom } from 'deepslate';
import { ref } from 'vue';
import { useDatapackStore } from '../stores/useDatapackStore';
import { useSettingsStore } from '../stores/useSettingsStore';

const datapackStore = useDatapackStore();
const settingsStore = useSettingsStore()
const dimensions = ref(await datapackStore.dimensions)
const world_presets = ref(await datapackStore.world_presets)

const random = XoroshiroRandom.create(BigInt(Date.now()))

datapackStore.$subscribe(async (mutation, state) => {
    world_presets.value = await datapackStore.world_presets
    dimensions.value = await datapackStore.dimensions
})

function randomizeSeed() {
    console.log("randomizing seed") 
    settingsStore.seed = random.nextLong()
}
</script>

<template>
    <div class="settings">
        <div class="setting">
            <div class="title">World Preset:</div>
            <select aria-label="World Preset" v-model="settingsStore.world_preset">
                <option v-for="(world_preset, index) in world_presets" :value="world_preset">{{ world_preset }}</option>
            </select>
        </div>
        <div class="setting">
            <div class="title">Dimension:</div>
            <select aria-label="Dimension" v-model="settingsStore.dimension">
                <option v-for="(dimension, index) in dimensions" :value="dimension">{{ dimension }}</option>
            </select>
        </div>
        <div class="setting">
            <div class="title short">Seed:</div>
            <font-awesome-icon icon="fa-dice" class="button" tabindex="0" @click="randomizeSeed"
                @keypress.enter="randomizeSeed" title="Randomize Seed" />
            <input aria-label="Seed" :value="settingsStore.seed" @change="event => {
                try {
                    settingsStore.seed = BigInt((event.target as HTMLInputElement).value)
                } catch {
                    (event.target as HTMLInputElement).value = settingsStore.seed.toString()
                }
            }" type="text" />

        </div>
    </div>
</template>

<style scoped>
.settings {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-sizing: border-box;
}

.setting {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.title {
    height: fit-content;
    width: 6.3rem;
}

.title.short {
    width: 3.8rem;
}

.button {
    background-color: lightgray;
    color: black;
    padding: 0.2rem;
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 0.2rem;
}

.button:hover,
.button:active {
    background-color: white;
}

select,
input {
    box-sizing: border-box;
    height: 2rem;
    background-color: lightgray;
    width: 0;
    flex-grow: 1;
    color: black;
    border-radius: 0.3rem;
    border: 2px solid rgb(55, 120, 173);
}</style>
