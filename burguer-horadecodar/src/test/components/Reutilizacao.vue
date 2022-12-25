<template>
    <div>
        <h2>Reutilização</h2>
        <ButtonVue />
        <ButtonVue />
        <ButtonVue />
        <ButtonVue />
    </div>
</template>

<script>
import ButtonVue from './Button.vue';

export default {
    name: 'Reutilizacao',
    components: {
        ButtonVue
    }
}
</script>

<style scoped>
div {
    background-color: thistle;
}
</style>