<template>
    <div>
        <h2>Variáveis Props</h2>
        <form @submit="sendForm">
            <InputTextPropVue v-model="nome" placeholder="Insira seu nome"  label="Nome" :disabled="disabled" />
            <InputTextPropVue v-model="email" placeholder="Insira seu email" label="E-mail" @click:modelLabel="clickLabel" />
            <InputTextPropVue v-model="estado" :placeholder="placeholderEstado" label="Estado" />
            <InputSubmitPropVue value="Cadastrar" :disabled=false />
        </form>
    </div>
</template>

<script>
import InputTextPropVue from './formComponents/InputTextProp.vue';
import InputSubmitPropVue from './formComponents/InputSubmitProp.vue';

export default {
    name: 'Variavel',
    components: {
        InputTextPropVue,
        InputSubmitPropVue
    },
    props: {

    },
    data() {
        return {
            placeholderEstado: 'Insira seu estado',
            disabled: true,
            nome: '',
            email: '',
            estado: '',
        }
    },
    methods: {
        sendForm(e) {
            e.preventDefault();

            console.log(`Usuário ${this.nome} possui e-mail ${this.email} e sua localização é no estado ${this.estado}`);
        },
        clickLabel() {
            console.log('label clickada');
        }
    }
}
</script>

<style scoped>
div {
    background-color: skyblue;
}
</style>