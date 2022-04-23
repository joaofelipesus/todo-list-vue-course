<template>
  <div
    class="progress-bar"
    :class="backgroundColor"
    data-test="progress-bar"
  >
    {{ percentage }}%
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
    margin-left: 25%;
  }

  .all-done {
    background: green;
  }

  .almost-done {
    background: yellow;
  }

  .a-lot-to-do {
    background: red;
  }
</style>
