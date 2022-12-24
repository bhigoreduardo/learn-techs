<template >
    <div class="message-container" v-show="message">
        <p v-text="message"></p>
    </div>
</template>

<script>
export default {
    name: 'MessageVue',
    props: ['message'],
    emits: ['closeMessage'],
    updated() {
        setInterval(() => {
            this.$emit('closeMessage');
        }, 3000);
    }
}
</script>

<style scoped>
.message-container {
    color: #004085;
    background-color: #cce5ff;
    border: 2px solid #b8daff;
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    margin: 40px auto;
}
</style>