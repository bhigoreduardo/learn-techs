<template>
  <NavbarVue :imgSrc="imgSrc" :imgAlt="imgAlt" />
  <router-view />
  <FooterVue />
</template>

<script>
import NavbarVue from './components/Navbar.vue';
import FooterVue from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavbarVue,
    FooterVue
  },
  data() {
    return {
      imgSrc: '/images/logo.png',
      imgAlt: 'Burguer'
    }
  }
}
</script>

<style>
* {
  font-family: Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  font-size: 42px;
  margin-bottom: 30px;
  text-align: center;
  color: #222;
}

label,
input,
select {
  font-family: inherit;
  font-size: 16px;
  color: #222;
}

label {
  display: block;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
  margin-bottom: 5px;
}

select {
  padding: 5px 10px;
  width: 100%;
}

.button {
  padding: 10px;
  background-color: #222;
  border: 2px solid #222;
  color: #fcba03;
  cursor: pointer;
  transition: .5s;
}

.button:hover {
  background-color: transparent;
  color: #222;
}
</style>