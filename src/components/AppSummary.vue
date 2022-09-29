<template>
    <div class="card card-w70">
<!--        <h1>Резюме Nickname</h1>-->
<!--        <div class="avatar">-->
<!--            <img src="https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png">-->
<!--        </div>-->
<!--        <h2>Опыт работы</h2>-->
<!--        <p>-->
<!--            главный герой американского мультсериала «Рик и Морти», гениальный учёный, изобретатель, атеист (хотя в некоторых сериях он даже молится Богу, однако, каждый раз после чудесного спасения ссылается на удачу и вновь отвергает его существование), алкоголик, социопат, дедушка Морти. На момент начала третьего сезона ему 70 лет[1]. Рик боится пиратов, а его главной слабостью является некий - "Санчезиум". Исходя из того, что существует неограниченное количество вселенных, существует неограниченное количество Риков, герой сериала предположительно принадлежит к измерению С-137. В серии комикcов Рик относится к измерению C-132, а в игре «Pocket Mortys» — к измерению C-123[2]. Прототипом Рика Санчеза является Эмметт Браун, герой кинотрилогии «Назад в будущее»[3].-->
<!--        </p>-->
        <h3 v-if="isEmptySummary">Добавьте первый блок, чтобы увидеть результат</h3>
        <component
            v-else
            v-for="(item, i) in summary"
            :is="'summary-' + item.type"
            :key="i"
            :value="item.value">
        </component>
    </div>
</template>

<script>
    import SummaryAvatar from "@/components/summaryBlock/SummaryAvatar";
    import SummaryTitle from "@/components/summaryBlock/SummaryTitle";
    import SummaryText from "@/components/summaryBlock/SummaryText";
    import SummarySubTitle from "@/components/summaryBlock/SummarySubTitle";

    export default {
        name: "AppSummary",
        props: {
            summary: Array,
            default: []
        },
        components: {
            SummaryAvatar,
            SummaryTitle,
            SummaryText,
            "summary-subtitle":SummarySubTitle
        },
        computed: {
            isEmptySummary() {
                return this.summary.length === 0
            }
        }
    }
</script>

<style scoped>

</style>