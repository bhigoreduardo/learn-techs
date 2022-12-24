<template>
    <div class="banner">
        <h1>Make Your Burguer</h1>
    </div>
</template>

<script>
export default {
    name: 'BannerVue'
}
</script>

<style scoped>
.banner {
    background-image: url('/public/images/burguer.jpg');
    background-position: 0 -250px;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 500px;
}

.banner h1 {
    color: #fff;
    background-color: #222;
    padding: 20px 40px;
    font-size: 60px;
    text-align: center;
}
</style>