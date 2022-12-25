<template>
    <h1>Tópicos básicos Vue.js</h1>
    <section>
        <PrimeiroComponentVue />
        <LifeCycleVue />
        <InputFormVue />
        <DiretivasVue />
        <MetodosVue />
        <ReutilizacaoVue />
        <VariavelVue />
    </section>
</template>

<script>
import PrimeiroComponentVue from './components/PrimeiroComponent.vue';
import LifeCycleVue from './components/LifeCycle.vue';
import InputFormVue from './components/InputForm.vue';
import DiretivasVue from './components/Diretivas.vue';
import MetodosVue from './components/Metodos.vue';
import ReutilizacaoVue from './components/Reutilizacao.vue';
import VariavelVue from './components/Variavel.vue';

export default {
    name: 'TopicosView',
    components: {
        PrimeiroComponentVue,
        LifeCycleVue,
        InputFormVue,
        DiretivasVue,
        MetodosVue,
        ReutilizacaoVue,
        VariavelVue
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
}

section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    margin: 0 auto;
    padding: 30px;
}

a,
button,
input[type='submit'] {
    color: red;
    background-color: white;
    cursor: pointer;
    border: 1px solid black;
}
</style>