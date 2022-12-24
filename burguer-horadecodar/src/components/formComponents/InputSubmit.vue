<template>
    <input class="button" type="submit" :value="inputValue" />
</template>

<script>
export default {
    name: 'InputSubmitVue',
    props: ['inputValue']
}
</script>