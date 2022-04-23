<template>
  <div class="task-list">
    <div v-if="tasks.length > 0">
      <task-card
        v-for="(task, index) in tasks"
        :key="task.description"
        :task="task"
        data-test="task-card"
        @changeStatus="hanldeChangeStatus(task, index)"
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
