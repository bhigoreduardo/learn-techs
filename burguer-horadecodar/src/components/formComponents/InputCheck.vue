<template>
    <div class="input-form">
        <label v-text="labelConteudo"></label>
        <div class="input-container">
            <span v-for="optionValue of optionValues">
                <input type="checkbox" :name="inputName" :value="optionValue.tipo" :key="optionValue.id" @input="$emit('update:modelValue', $event.target.value)" /> {{ optionValue.tipo }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputCheckVue',
    props: ['labelConteudo', 'optionValues', 'inputName']
}
</script>

<style scoped>
.input-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
}

span {
    margin-right: 10px;
}
</style>