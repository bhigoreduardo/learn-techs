<template>
    <form class="form-pedido">
        <InputTextVue inputId="nome" labelConteudo="Nome do cliente" inputName="nome" inputPlaceholder="Insira seu nome" v-model="nome" />
        <SelectVue selectId="pao" labelConteudo="Pão do burguer" selectName="pao" :optionValues="paoValues" v-model="pao" />
        <SelectVue selectId="carne" labelConteudo="Carne do burguer" selectName="carne" :optionValues="carneValues" v-model="carne" />
        <InputCheckVue labelConteudo="Adicionais" inputName="adicionais" :optionValues="adicionaisValues" v-model="adicional" @change="addAdicional"/>
        <InputSubmitVue inputValue="Realizar pedido" />
    </form>
</template>

<script>
import InputTextVue from './formComponents/InputText.vue';
import SelectVue from './formComponents/Select.vue';
import InputCheckVue from './formComponents/InputCheck.vue';
import InputSubmitVue from './formComponents/InputSubmit.vue';

export default {
    name: 'FormPedidoVue',
    components: {
        InputTextVue,
        SelectVue,
        InputCheckVue,
        InputSubmitVue
    },
    data() {
        return {
            nome: null,
            pao: null,
            adicional: null,

            adicionais: []
        }
    },
    methods: {
        addAdicional(event) {
            const value = event.target.value;
            const index = this.adicionais.findIndex(adicional => adicional === value);

            if (index < 0) this.addAdicional.push(value);
            else this.adicionais = this.adicionais.filter(adicional => adicional != value);
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