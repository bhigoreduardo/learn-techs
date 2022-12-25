<template>
    <MessageVue :message="message" @closeMessage="message = null" />
    <div class="dashboard">
        <div class="heading">
            <span>#</span>
            <span>Cliente</span>
            <span>Pão</span>
            <span>Carne</span>
            <span>Adicionais</span>
            <span>Ações</span>
        </div>
        <div class="body">
            <div class="order" v-for="pedido of pedidos" :key="pedido.id">
                <span v-text="pedido.id"></span>
                <span v-text="pedido.nome"></span>
                <span v-text="pedido.pao"></span>
                <span v-text="pedido.carne"></span>
                <span>
                    <ul>
                        <li v-for="(adicional, index) of pedido.adicionais" :key="index" v-text="adicional"></li>
                    </ul>
                </span>
                <span>
                    <select @change="updatePedido($event, pedido.id)">
                        <option v-for="s of status" :key="s.id" :value="s.tipo" :selected="s.tipo == pedido.status" v-text="s.tipo"></option>
                    </select>
                </span>
                <span>
                    <button class="button" type="button" @click="deletePedido(pedido.id)">Cancelar</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import SelectVue from './formComponents/Select.vue';
import MessageVue from './Message.vue';

export default {
    name: 'DashboardVue',
    components: {
        SelectVue,
        MessageVue
    },
    data() {
        return {
            apiUrl: 'http://localhost:3000',
            pedidos: [],
            status: [],
            message: null
        }
    },
    mounted() {
        this.findAllPedidos();
        this.findAllStatus();
    },
    methods: {
        async findAllPedidos() {
            // fetch Request
            /*
            await fetch(`${this.apiUrl}/burgers`)
                .then(res => res.json())
                .then(data => this.pedidos = data)
                .catch(err => console.log(err));
            */

            // axios Request
            axios.get(`${this.apiUrl}/burgers`)
                .then(res => this.pedidos = res.data)
                .catch(err => console.log(err));
        },
        async findAllStatus() {
            // fetch Request
            /*
            await fetch(`${this.apiUrl}/status`)
                .then(res => res.json())
                .then(data => this.status = data)
                .catch(err => console.log(err));
            */

            // axios Request
            axios.get(`${this.apiUrl}/status`)
                .then(res => this.status = res.data)
                .catch(err => console.log(err));
        },
        async updatePedido(event, id) {
            const status = event.target.value;

            // fetch Request
            /*
            await fetch(`${this.apiUrl}/burgers/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({status: status})
            })
                .then(res => res.json())
                .then(data => this.message = `Pedido n° ${data.id} encontra-se: '${data.status}'`)
                .catch(err => console.log(err));
            */
            
            // axios Request
            axios.patch(`${this.apiUrl}/burgers/${id}`, {status: status})
                .then(res => this.message = `Pedido n° ${res.data.id} encontra-se: '${res.data.status}'`)
                .catch(err => console.log(err));
        },
        async deletePedido(id) {
            // fetch Request
            /*
            await fetch(`${this.apiUrl}/burgers/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    this.pedidos = this.pedidos.filter(pedido => pedido.id != id);
                    this.message = `Pedido n° ${id} encontra-se: 'Cancelado'`;
                })
                .catch(err => console.log(err));
            */

            // axios Request
            axios.delete(`${this.apiUrl}/burgers/${id}`)
                .then(res => {
                    this.pedidos = this.pedidos.filter(pedido => pedido.id != id);
                    this.message = `Pedido n° ${id} encontra-se: 'Cancelado'`;
                })
                .catch(err => console.log(err));
        }
    }
}
</script>

<style scoped>
.dashboard {
    max-width: 1200px;
    margin: 0 auto;
}

.heading,
.body .order {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
}

.heading {
    font-weight: bold;
    border-bottom: 3px solid #333;
}

.body .order {
    border-bottom: 1px solid #ccc;
}

select {
    padding: 10px;
}
</style>