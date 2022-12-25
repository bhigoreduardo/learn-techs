<template>
    <div>
        <h2>Ciclos de vida</h2>
        <p>Meu sobrenome é {{ sobrenome }}</p>
        <p>Hierarquia dos ciclos de vida: BeforeCreat, Created, BeforeMount, Mounted, BeforeUnmount, Unmouted</p>
        <button type="button" v-on:click="activeImg">Mostrar descritivo</button>
        <img id="img" v-bind:src="src" :alt="alt">
    </div>
</template>

<script>
export default {
    name: 'LifeCycleVue',
    data() {
        return {
            sobrenome: '',
            src: 'https://vuejs.org/assets/lifecycle.16e4c08e.png',
            alt: 'Life Cycle Hook'
        }
    },
    created() {
        setTimeout(() => {
            this.sobrenome = "Batista";
        }, 1000)
    },
    mounted() {
        this.sobrenome = "BATISTA";
    },
    methods: {
        activeImg(event) {
            document.getElementById('img').classList.toggle('active');
        }
    }
}
</script>

<style scoped>
div {
    background-color: aqua;
}

img {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    background-color: white;
}

.active {
    display: block;
}
</style>