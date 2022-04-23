<template>
  <div class="task-list">
    <div v-if="tasks.length > 0">
      <task-card
        v-for="task in tasks"
        :key="task.description"
        :task="task"
        data-test="task-card"
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
  }
}
</script>

<style>
  .task-list {
    width: 80%;
    margin-left: 10%;
  }
</style>
