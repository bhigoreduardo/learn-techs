<template>
    <input type="submit" :value="value" :disabled="disabled" />
</template>

<script>
export default {
    name: 'InputSubmitPropVue',
    props: ['value', 'disabled']
}
</script>