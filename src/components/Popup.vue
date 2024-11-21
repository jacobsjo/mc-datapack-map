<script setup lang="ts">
import { ref } from 'vue';
import { useUiStore } from '../stores/useUiStore';

    const props = defineProps({
        title: String,
    })

    const dialog = ref<HTMLDialogElement>()

    const showPopup = () => {
        dialog.value?.showModal()
    }

    const closePopup = () => {
        dialog.value?.close()
    }

    defineExpose({
        show: showPopup,
        close: closePopup,
    });
</script>

<template>
    <dialog ref="dialog" class=popup>
        <div class="title">
            {{ title }}
        </div>
        <font-awesome-icon icon="fa-xmark" class="close_button" title="Close" @click="closePopup()" tabindex="0" @keypress.enter="closePopup()"/>
        <slot v-bind:close="closePopup"></slot>
    </dialog>
</template>

<style scoped>

.popup {
    padding: 0.5rem;
    padding-top: 0.2rem;
    border-radius: 1rem;
    background-color: rgb(3, 33, 58);
    color: black;
    z-index: 100000;
    border: 2px solid black;
    height: fit-content;
    overflow: hidden;
    max-height: calc(100vh - 7rem);
}

.popup::backdrop {
    background-color: black;
    opacity: 0.8;
}

.title {
    color: white;
    font-weight: bold;    
    margin-bottom: 0.5rem;
}

.close_button {
    position: absolute;
    right: 0rem;
    top: 0rem;
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2rem;
    padding: 0.2rem;
    transition: 0.3s;
}

.close_button:hover{
    background-color: rgb(255, 133, 133);
}

</style>