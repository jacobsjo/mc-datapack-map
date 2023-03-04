<script setup lang="ts">
defineEmits(['close'])
</script>

<template>
    <div class="overlay"></div>
    <div class=popup>
        <div class="content">
            <font-awesome-icon icon="fa-xmark" class="close_button" title="Close" @click="$emit('close')" />
            <slot></slot>
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
    background-color: lightgray;
    color: black;
    z-index: 100000;
    border: 2px solid lightgray;
    width: 50rem;
    height: 40rem;
    max-height: calc(100% - 10rem);
    max-width: calc(100% - 4rem);
}

.content {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0.4rem;
    background-color: rgb(165, 165, 165);
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