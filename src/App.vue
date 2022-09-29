<template>
  <div class="container column">
    <app-form @addNewBlock="addNewSummaryBlock"></app-form>
    <app-summary :summary="summary"></app-summary>
  </div>
  <app-comment></app-comment>
</template>

<script>
import AppForm from "@/components/AppForm";
import AppSummary from "@/components/AppSummary";
import AppComment from "@/components/AppComment";

export default {
  data() {
    return {
      summary: []
    }
  },
  components: {
    AppForm,
    AppSummary,
    AppComment
  },
  methods: {
    addNewSummaryBlock(val) {
      this.summary.push(val)
    }
  }
}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
