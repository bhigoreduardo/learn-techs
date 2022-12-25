<template>
    <nav class="navbar">
        <router-link to="/" id="logo-router"><img :src="imgSrc" :alt="imgAlt" id="logo" /></router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/pedidos">Pedidos</router-link>
        <router-link to="/topicos">Tópicos</router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavbarVue',
    props: ['imgSrc', 'imgAlt']
}
</script>

<style scoped>
.navbar {
    background-color: #222;
    border-bottom: 4px solid #111;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 15px 50px;
}

#logo-router {
    margin: auto;
    margin-left: 0;
}

#logo {
    width: 40px;
    height: 40px;
}

a {
    color: #fcba03;
    text-decoration: none;
    margin: 10px;
    transition: .5s;
}

a:hover {
    color: #fff;
}
</style>