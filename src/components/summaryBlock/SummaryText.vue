<template>
    <p>
        {{ value }}
    </p>
</template>

<script>
    export default {
        name: "SummaryText",
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