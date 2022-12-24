<template>
    <MessageVue :message="message" @closeMessage="message = null" />
    <form class="form-pedido" @submit="savePedido">
        <InputTextVue inputId="nome" labelConteudo="Nome do cliente" inputName="nome" inputPlaceholder="Insira seu nome" v-model="nome" />
        <SelectVue selectId="pao" labelConteudo="Pão do burguer" selectName="pao" :optionValues="paoValues" v-model="pao" />
        <SelectVue selectId="carne" labelConteudo="Carne do burguer" selectName="carne" :optionValues="carneValues" v-model="carne" />
        <InputCheckVue labelConteudo="Adicionais" inputName="adicionais" :optionValues="adicionaisValues" @change="addAdicional"/>
        <InputSubmitVue inputValue="Realizar pedido" />
    </form>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

import InputTextVue from './formComponents/InputText.vue';
import SelectVue from './formComponents/Select.vue';
import InputCheckVue from './formComponents/InputCheck.vue';
import InputSubmitVue from './formComponents/InputSubmit.vue';
import MessageVue from './Message.vue';

export default {
    name: 'FormPedidoVue',
    components: {
        InputTextVue,
        SelectVue,
        InputCheckVue,
        InputSubmitVue,
        MessageVue
    },
    data() {
        return {
            apiUrl: 'http://localhost:3000',

            nome: null,
            pao: null,
            carne: null,
            adicionais: [],

            paoValues: null,
            carneValues: null,
            adicionaisValues: null,

            message: null
        }
    },
    mounted() {
        this.findAllIngredientes();
    },
    methods: {
        addAdicional(event) {
            const value = event.target.value;
            const index = this.adicionais.findIndex(adicional => adicional === value);

            if (index < 0) this.adicionais.push(value);
            else this.adicionais = this.adicionais.filter(adicional => adicional != value);
        },
        async findAllIngredientes() {
            // fetch Request
            /*
            await fetch(`${this.apiUrl}/ingredientes`)
                .then(res => res.json())
                .then(data => {
                    this.paoValues = data.paes;
                    this.carneValues = data.carnes;
                    this.adicionaisValues = data.opcionais;
                })
                .catch(err => console.log(err));
            */

            // axios Request
            axios.get(`${this.apiUrl}/ingredientes`)
                .then(res => {
                    this.paoValues = res.data.paes;
                    this.carneValues = res.data.carnes;
                    this.adicionaisValues = res.data.opcionais;
                })
                .catch(err => console.log(err));
        },
        async savePedido(event) {
            event.preventDefault();

            const burguer = {
                nome: this.nome,
                pao: this.pao,
                carne: this.carne,
                adicionais: Array.from(this.adicionais),
                status: 'Solicitado'
            }

            // fetch Request
            /*
            await fetch(`${this.apiUrl}/burgers`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(burguer)
            })
                .then(res => res.json())
                .then(data => this.message = `Pedido n° ${data.id} efetuado por ${data.nome} encontra-se: '${data.status}'`)
                .catch(err => console.log(err));
            */

            // axios Request
            axios.post(`${this.apiUrl}/burgers`, qs.stringify(burguer))
                .then(res => this.message = `Pedido n° ${res.data.id} efetuado por ${res.data.nome} encontra-se: '${res.data.status}'`)
                .catch(err => console.log(err));
        }
    }
}
</script>

<style scoped>
.form-pedido {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>