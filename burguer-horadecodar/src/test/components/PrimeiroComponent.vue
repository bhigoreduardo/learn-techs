<template>
    <div>
        <h2>Primeiro componente</h2>
        <h3>Hello World</h3>
        <p>My name is {{ nome }}</p>
    </div>
</template>

<script>
export default {
    name: 'PrimeiroComponentVue',
    data() {
        return {
            nome: "Higor"
        }
    }
}
</script>

<style scoped>
div {
    background-color: bisque;
}
</style>