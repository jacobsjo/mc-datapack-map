<script setup lang="ts">
defineEmits(['close'])
</script>

<template>
    <div class="overlay"></div>
    <div class=popup>
        <div class="content">
            <slot></slot>
            <font-awesome-icon icon="fa-xmark" class="close_button" title="Close" @click="$emit('close')" tabindex="0" @keypress.enter="$emit('close')"/>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 99999;
    position: absolute;
}


.popup {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgb(3, 33, 58);
    color: black;
    z-index: 100000;
    border: 2px solid black;
    max-height: calc(100% - 10rem);
    display: flex;
    flex-direction: row;
}

.content {
    box-sizing: border-box;
    max-height: inherit;
    padding: 0.4rem;
    max-height: calc(100vh - 10rem);
}

.close_button {
    position: absolute;
    right: 1rem;
    top: -1rem;
    background-color: red;
    color: white;
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    padding: 0.2rem;
    transition: 0.3s;
}

.close_button:hover{
    background-color: rgb(255, 133, 133);
}

</style>