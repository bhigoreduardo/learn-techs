<template>
  <BannerVue />

  <div class="container">
    <h1>Realizar pedido</h1>
    <FormPedidoVue />
  </div>
</template>

<script>
import BannerVue from '@/components/Banner.vue';
import FormPedidoVue from '@/components/FormPedido.vue';

export default {
  name: 'HomeView',
  components: {
    BannerVue,
    FormPedidoVue
  }
}
</script>
