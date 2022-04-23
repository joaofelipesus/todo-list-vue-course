<template>
  <div class="task-form">
    <div>
      <input
        v-model="description"
        @keyup.enter="handleAddTask"
        data-test="description-field"
        placeholder="Adicione nova tarefa"
        autofocus
      />
      <button
        @click="handleAddTask"
        data-test="add-task-button"
      >
        Add
      </button>
    </div>
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

<style scoped>
  .task-form {
    margin-bottom: 2%;
    width: 40%;
  }

  .task-form input {
    height: 2.5em;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding-left: 5px;
    width: 80%;
  }

  .task-form button {
    height: 2.8em;
    width: 5em;
    background: rgba(89, 193, 115, 0.54);
    border: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: white;
    font-weight: bold;
  }
</style>
