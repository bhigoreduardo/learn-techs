<template>
    <button type="button" @click="active">Ativar</button>
    <span v-if="status">{{ text }}</span>
</template>

<script>
export default {
    name: 'ButtonVue',
    data() {
        return {
            text: 'Ativado',
            status: false
        }
    },
    methods: {
        active() {
            this.status = !this.status;
            setTimeout(() => this.status = !this.status, 1000)
        }
    }
}
</script>