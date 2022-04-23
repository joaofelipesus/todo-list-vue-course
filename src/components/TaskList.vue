<template>
  <div class="task-list">
    <div
      v-if="tasks.length > 0"
      class="cards"
    >
      <task-card
        v-for="(task, index) in tasks"
        :key="task.description"
        :task="task"
        data-test="task-card"
        @changeStatus="hanldeChangeStatus(task, index)"
        @removeCard="handleRemoveTask(index)"
      />
    </div>
    <p
      v-else
      data-test="empty-list-message"
    >
      Todas as tartefas feitas.
    </p>
  </div>
</template>

<script>
import TaskCard from './TaskCard.vue'
export default {
  components: { TaskCard },
  props: {
    tasks: {
      type: Array,
      require: true
    }
  },

  methods: {
    hanldeChangeStatus (task, index) {
      if (task.status === 'done') {
        task.status = 'pending'
      } else {
        task.status = 'done'
      }
    },

    handleRemoveTask (index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<style>
  .task-list {
    width: 80%;
    margin-left: 10%;
  }

  .cards {
    display: flex;
    /* justify-content: space-between; */
    align-items: stretch;
  }
</style>
