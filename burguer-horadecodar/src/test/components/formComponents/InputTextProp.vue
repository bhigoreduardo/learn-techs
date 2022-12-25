<template>
    <label @click="$emit('click:modelLabel')">{{ label }}</label>
    <input @input="$emit('update:modelValue', $event.target.value)" type="text" :placeholder="placeholder" :disabled="disabled" />
</template>

<script>
export default {
    name: 'InputTextPropVue',
    props: {
        label: String,
        placeholder: String,
        disabled: Boolean
    },
    emits: ['update:modelValue', 'click:modelLabel']
}
</script>