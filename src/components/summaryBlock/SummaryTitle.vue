<template>
    <h1>
        {{ value }}
    </h1>
</template>

<script>
    export default {
        name: "SummaryTitle",
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