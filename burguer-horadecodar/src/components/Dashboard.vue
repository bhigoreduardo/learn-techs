<template>
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
import SelectVue from './formComponents/Select.vue';

export default {
    name: 'DashboardVue',
    components: {
        SelectVue
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