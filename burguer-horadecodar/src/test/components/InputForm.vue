<template>
    <div>
        <h2>Hierarquia</h2>
        <form>
            <InputTextVue />
            <InputTextVue />
            <InputTextVue />
            <InputSubmitVue />
        </form>
    </div>
</template>

<script>
import InputTextVue from './formComponents/InputText.vue';
import InputSubmitVue from './formComponents/InputSubmit.vue';

export default {
    name: 'Form',
    components: {
        InputTextVue,
        InputSubmitVue
    }
}
</script>

<style scoped>
div {
    background-color: cadetblue;
}
</style>