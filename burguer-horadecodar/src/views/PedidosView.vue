<template>
    <div class="container">
        <h1>Pedidos</h1>
        <DashboardVue />
    </div>
</template>

<script>
import DashboardVue from '@/components/Dashboard.vue';

export default {
    name: 'PedidoView',
    components: {
        DashboardVue
    }
}
</script>