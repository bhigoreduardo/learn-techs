<template>
    <div class="input-form">
        <label :for="inputId" v-text="labelConteudo"></label>
        <input
            type="text"
            :name="inputName"
            :id="inputId"
            :placeholder="inputPlaceholder"
            @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script>
export default {
    name: 'InputTextVue',
    props: {
        inputId: String,
        labelConteudo: String,
        inputName: String,
        inputPlaceholder: String
    },
    emits: ['update:modelValue']
}
</script>

<style scoped>
input {
    padding: 5px 10px;
    width: 100%;
}
</style>