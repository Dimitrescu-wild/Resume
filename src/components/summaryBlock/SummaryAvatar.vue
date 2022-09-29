<template>
    <div class="avatar">
        <img :src="value" alt="Аватарка">
    </div>
</template>

<script>
    export default {
        name: "SummaryAvatar",
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