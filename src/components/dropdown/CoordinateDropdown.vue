<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCoordinateStore } from '../../stores/useCoordinateStore';
import { EventTracker } from '../../util/EventTracker';
import Dropdown from './Dropdown.vue';

const coordinateStore = useCoordinateStore()

const emit = defineEmits<{
    navigate: [x: number, z: number]
    close: []
    getCurrentLocation: []
}>()

watch([() => coordinateStore.x, () => coordinateStore.z], () => {
    coordinateStore.validateCoordinates()
})

function handleNavigate() {
    const coords = coordinateStore.getCoordinates()
    if (coords) {
        EventTracker.track('coordinate_search/navigate')
        emit('navigate', coords[0], coords[1])
        emit('close')
    }
}

function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && coordinateStore.isValid) {
        handleNavigate()
    }
}

function handleCurrentLocation() {
    EventTracker.track('coordinate_search/current_location')
    emit('getCurrentLocation')
}
</script>

<template>
    <Dropdown class="coordinate-dropdown">
        <div class="coordinate-inputs">
            <input 
                v-model="coordinateStore.x" 
                type="text" 
                :placeholder="$t('dropdown.coordinate.x_placeholder')"
                @keypress="handleKeyPress"
                autocomplete="off"
                class="coordinate-input"
            />
            <input 
                v-model="coordinateStore.z" 
                type="text" 
                :placeholder="$t('dropdown.coordinate.z_placeholder')"
                @keypress="handleKeyPress"
                autocomplete="off"
                class="coordinate-input"
            />
        </div>
        
        <div class="coordinate-actions">
            <button 
                class="action-button navigate-button" 
                :disabled="!coordinateStore.isValid"
                @click="handleNavigate"
            >
                <font-awesome-icon icon="fa-crosshairs" />
                {{ $t('dropdown.coordinate.navigate') }}
            </button>
            
            <button 
                class="action-button current-location-button"
                @click="handleCurrentLocation"
            >
                <font-awesome-icon icon="fa-location-arrow" />
                {{ $t('dropdown.coordinate.current_location') }}
            </button>
        </div>
        
        <div class="coordinate-help" v-if="!coordinateStore.isValid && (coordinateStore.x || coordinateStore.z)">
            <font-awesome-icon icon="fa-exclamation-triangle" />
            <span>{{ $t('dropdown.coordinate.invalid_coordinates') }}</span>
        </div>
    </Dropdown>
</template>

<style scoped>
.coordinate-dropdown {
    background-color: rgb(59, 59, 59);
    padding: 0;
    width: 100%;
    box-sizing: border-box;
}

.coordinate-inputs {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 100%;
    padding: 0.5rem;
    padding-bottom: 0.25rem;
    box-sizing: border-box;
}

.coordinate-input {
    flex: 1;
    background-color: rgb(59, 59, 59);
    color: white;
    padding: 0.5rem;
    border: 0;
    outline: 0;
    border-bottom: 2px solid transparent;
    font-size: 0.9rem;
    box-sizing: border-box;
}

.coordinate-input::placeholder {
    color: rgb(150, 150, 150);
}

.coordinate-input:hover {
    border-bottom-color: rgb(31, 98, 129);
}

.coordinate-input:focus {
    border-bottom-color: rgb(25, 156, 218);
}

.coordinate-actions {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 100%;
    padding: 0.25rem 0.5rem 0.5rem 0.5rem;
    background-color: rgb(88, 88, 88);
    box-sizing: border-box;
}

.action-button {
    width: 100%;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    transition: background-color 0.2s;
    border-radius: 0.25rem;
    box-sizing: border-box;
}

.navigate-button {
    background-color: rgb(120, 120, 120);
    color: white;
}

.navigate-button:hover:not(:disabled) {
    background-color: rgb(140, 140, 140);
}

.navigate-button:disabled {
    background-color: rgb(100, 100, 100);
    color: rgb(160, 160, 160);
    cursor: not-allowed;
}

.current-location-button {
    background-color: rgb(120, 120, 120);
    color: white;
}

.current-location-button:hover {
    background-color: rgb(140, 140, 140);
}

.coordinate-help {
    margin: 0.25rem 0.5rem 0.5rem 0.5rem;
    padding: 0.4rem;
    background-color: rgb(130, 100, 60);
    color: rgb(255, 220, 180);
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.25rem;
    box-sizing: border-box;
}
</style>
