<template>
    <div>
        <h2>Métodos</h2>
        <button @click="changeButton">{{ buttonText }}</button>
        <button v-on:click="changeButton">{{ buttonText }}</button>
        <p v-if="buttonStatus">Button status: {{ buttonStatus }}</p>

        <form @submit="sendForm($event)">
            <input type="text" v-model="nome" />
            <input type="text" v-model="email" />
            <InputSubmitVue />
        </form>

        <button @click="first('first', $event), second('second', $event), third('third', $event)">Chaning
            metódos</button>
        <p>{{ texto }}</p>
    </div>
</template>

<script>
import InputSubmitVue from './formComponents/InputSubmit.vue';

export default {
    name: 'MetodosVue',
    components: {
        InputSubmitVue
    },
    data() {
        return {
            buttonStatus: false,
            buttonText: 'Exibir',
            nome: '',
            email: '',
            texto: ''
        }
    },
    created() {
        this.changeButton();
    },
    methods: {
        changeButton() {
            this.buttonStatus = !this.buttonStatus;

            if (this.buttonStatus) {
                this.buttonText = 'Esconder';
                return;
            }

            this.buttonText = 'Exibir';
        },
        sendForm(event) {
            event.preventDefault();

            const nome = this.nome;
            const email = this.email;

            console.log('Form submit');
            console.log(`Nome: ${nome}`);
            console.log(`E-mail: ${email}`);
        },
        first(txt, e) {
            this.texto = txt + 'método';
        },
        second(txt, e) {
            setTimeout(() => this.texto = txt + 'método', 1000);
        },
        third(txt, e) {
            setTimeout(() => this.texto = txt + 'método', 2000);
        }
    }
}
</script>

<style scoped>
div {
    background-color: dimgray;
}
</style>