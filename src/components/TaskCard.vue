<template>
  <div
    class="task-card"
    :class="backgroundColorClass"
    @click="handleCardClick"
  >
    <button
      @click="handleCloseButtonClick"
      class="close-card-button"
      data-test="remove-task-button"
    >
      X
    </button>
    <p v-if="task.status === 'done'" data-test="description">
      <s data-test="marked-description">{{task.description}}</s>
    </p>
    <p v-else data-test="description">
      {{task.description}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      require: true
    }
  },

  computed: {
    backgroundColorClass () {
      if (this.task.status === 'done') { return 'done' }

      return 'pending'
    }
  },

  methods: {
    handleCardClick () {
      this.$emit('changeStatus')
    },

    handleCloseButtonClick () {
      this.$emit('removeCard')
    }
  }
}
</script>

<style scoped>
  p {
    font-weight: bold;
  }

  .task-card {
    width: 15%;
    border-radius: 8px;
    margin: 1em;
    padding: 0.5em;
  }

  .close-card-button {
    all: unset;
    background: rgba(0, 0, 0, 0.4);
    padding: 5px;
    border-radius: 15px;
    float: right;
  }

  .done {
    background: green
  }

  .pending {
    background: #ED213A;
  }
</style>
