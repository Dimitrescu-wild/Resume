<template>
    <div class="container">
        <p v-if="!isLoadComments" @click="uploadComments">
            <button class="btn primary">Загрузить комментарии</button>
        </p>
        <div v-if="isLoad" class="card">
            <h2>Комментарии</h2>
            <ul class="list">
<!--                <li class="list-item">-->
<!--                    <div>-->
<!--                        <p><strong>test@microsoft.com</strong></p>-->
<!--                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, reiciendis.</small>-->
<!--                    </div>-->
<!--                </li>-->

                <li v-for="(item, idx) in comments" class="list-item" :key="item.id">
                    <div>
                        <p><strong>{{ item.email }}</strong></p>
                        <small>{{ item.body }}</small>
                    </div>
                </li>
            </ul>
        </div>
        <div class="loader" v-if="isLoading"></div>
    </div>
</template>

<script>
    export default {
        name: "AppComment",
        data() {
            return {
                isLoadComments: false,
                isLoading: false,
                isLoad: false,
                comments: []
            }
        },
        methods: {
            async uploadComments() {
                this.isLoadComments = true;
                this.isLoading = true;

                const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=42");
                this.comments = await response.json();
                console.log(this.comments)

                this.isLoad = true;
                this.isLoading = false;
            }
        }
    }
</script>

<style scoped>

</style>