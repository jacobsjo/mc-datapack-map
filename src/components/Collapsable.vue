<script setup lang="ts">
import { ref } from 'vue';

const open = ref(true)
</script>

<template>
    <div class="toggle" :class="{open}" >
        <font-awesome-icon icon="fa-bars" class="icon" tabindex="0" @click="open = !open" @keypress.enter="open = !open" />
    </div>
    <div class="content">
        <Transition name="slide">
            <slot v-if="open"></slot>
        </Transition>
    </div>
</template>

<style scoped>
.content {
    width: fit-content;
    position: absolute;
    height: 100%;
    left: 0;
    z-index: 5000;
}

.toggle {
    background-color: rgb(3, 33, 58);
    width: 3rem;
    height: 3rem;
    border-radius: 0 1rem 1rem 0;
    position: absolute;
    left: 0rem;
    top: 0.2rem;
    z-index: 5001;
    transition: 0.3s ease;
    justify-content: center;
    align-content: center;
    display: flex;
}

.toggle.open {
    left: 14.8rem
}

.icon {
    color: white;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    box-sizing: border-box;
    border-radius: 1rem;
}

.icon:hover{
    background-color: rgb(7, 68, 78);
}

.slide-enter-active,
.slide-leave-active {
    transition: 1s;
}

.slide-enter-from,
.slide-leave-to {
    transform: translate(-100%, 0);
}
</style>