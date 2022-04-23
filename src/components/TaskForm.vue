<template>
  <div>
    <form>
      <input
        v-model="description"
        @keyup.enter="handleAddTask"
        data-test="description-field"
      />
      <button
        @click="handleAddTask"
        data-test="add-task-button"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      description: ''
    }
  },

  methods: {
    handleAddTask () {
      this.$emit('addTask', { description: this.description, status: 'pending' })
      this.description = ''
    }
  }
}
</script>

<style>

</style>
