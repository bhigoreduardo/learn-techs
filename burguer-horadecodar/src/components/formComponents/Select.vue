<template>
    <div class="select-form">
        <label :for="selectId" v-text="labelConteudo"></label>
        <select :name="selectName" :id="selectId" @input="$emit('update:modelValue', $event.target.value)">
            <option selected disabled>Faça sua escolha</option>
            <option v-for="optionValue of optionValues" :value="optionValue.tipo" :key="optionValue.id" v-text="optionValue.tipo"></option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SelectVue',
    props: ['selectId', 'labelConteudo', 'selectName', 'optionValues'],
    emits: ['update:modelValue']
}
</script>