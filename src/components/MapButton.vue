<script setup lang="ts">
    const props = defineProps({
            icon: String,
            modelValue: Boolean,
            disabled: Boolean,
            title: String
        })

    const emits = defineEmits([
        'update:modelValue'
    ])

    function toggle() {
        if (!props.disabled){
            emits('update:modelValue', !props.modelValue)
        }
    }

</script>

<template>
    <font-awesome-icon :icon="icon" class="button"
        :class="{
            active: modelValue,
            disabled: disabled
        }"
        tabindex="0"
        :title="title"
        @click="toggle"
        @keypress.enter="toggle" />

</template>

<style scoped>
    .button {
        background-color: gray;
        padding: 0.3rem;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 0.3rem;
        cursor: pointer;
        border: 2px solid rgb(65, 65, 65);
        outline: none;
    }

    .button:hover {
        background-color: rgb(160, 160, 160);
    }

    .button:focus-visible {
        outline: 2px solid yellow   ;    
    }

    .button.active {
        background-color: rgb(193, 224, 17);
    }

    .button.disabled {
        background-color: rgb(129, 129, 129);
        color: rgb(95, 95, 95);
        cursor: default;
        border-color: rgb(95, 95, 95);
    }

    .button.active.disabled {
        background-color: rgb(169, 173, 148);
    }
</style>

