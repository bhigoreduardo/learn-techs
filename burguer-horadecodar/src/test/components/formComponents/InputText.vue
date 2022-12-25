<template>
    <input type="text" :placeholder="placeholder" @input="placeholder" />
</template>

<script>
export default {
    name: 'InputTextVue',
    data() {
        return {
            placeholder: ''
        }
    }
}
</script>

<style scoped>
input {
    display: block;
}
</style>