<template>
    <form class="card card-w30">
        <div class="form-control">
            <label for="type">Тип блока</label>
            <select id="type" v-model="typeBlock">
                <option v-for="(option, key) of options" :value="key" :key="key">
                    {{ option }}
                </option>
            </select>
        </div>

        <div class="form-control">
            <label for="value">Значение</label>
            <textarea id="value" rows="3" v-model="valueBlock"></textarea>
        </div>

        <button class="btn primary" :disabled="isDisabledBtn" @click.prevent="addBlock">Добавить</button>
    </form>
</template>

<script>
    export default {
        name: "AppForm",
        emits: ['addNewBlock'],
        data() {
            return {
                options: {
                    title: "Заголовок",
                    subtitle: "Подзаголовок",
                    avatar: "Аватар",
                    text: "Текст",
                },
                valueBlock: "",
                typeBlock: "title"
            }
        },
        methods: {
            addBlock() {
                const block = {
                    type: this.typeBlock,
                    value: this.valueBlock
                }
                this.$emit("addNewBlock", block);

                this.valueBlock = "";
                this.typeBlock = "title";
            }
        },
        computed: {
            isDisabledBtn() {
                return this.valueBlock.length < 4
            }
        }
    }
</script>

<style scoped>

</style>