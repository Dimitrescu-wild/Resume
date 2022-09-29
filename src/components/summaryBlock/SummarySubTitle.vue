<template>
    <h2>
        {{ value }}
    </h2>
</template>

<script>
    export default {
        name: "SummarySubTitle",
        props: {
            value: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>