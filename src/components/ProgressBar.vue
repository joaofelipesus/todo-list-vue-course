<template>
  <div
    class="progress-bar"
    :class="backgroundColor"
    data-test="progress-bar"
  >
    <h2>{{ percentage }}%</h2>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      require: true,
      type: Number
    }
  },

  computed: {
    backgroundColor () {
      if (this.percentage === 100) { return 'all-done' }
      if (this.percentage > 75) { return 'almost-done' }

      return 'a-lot-to-do'
    }
  }
}
</script>

<style scoped>
  .progress-bar {
    text-align: center;
    width: 50%;
    margin-bottom: 2em;
    border-radius: 10px;
  }

  .progress-bar h2 {
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .all-done {
    background: linear-gradient(to right, #799F0C, #ACBB78);
  }

  .almost-done {
    background: linear-gradient(to right, #ffe259, #ffa751)
  }

  .a-lot-to-do {
    background: linear-gradient(to right, #FF416C, #FF4B2B)
  }
</style>
