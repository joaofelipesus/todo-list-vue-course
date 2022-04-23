<template>
  <div id="app">
    <h1>Tarefas</h1>
    <task-form @addTask="handleAddTask"/>
    <progress-bar
      v-if="tasks.length > 0"
      :percentage="taskCompletePercentage"
    />
    <task-list
      v-if="tasks.length > 0"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'

export default {
  components: { TaskList, TaskForm, ProgressBar },
  data () {
    return {
      tasks: []
    }
  },

  computed: {
    taskCompletePercentage () {
      if (this.tasks.length === 0) { return 0 }

      const finishedTasks = this.tasks.filter(task => {
        return task.status === 'done'
      }).length
      const completeTasks = finishedTasks / this.tasks.length
      return parseInt(completeTasks * 100)
    }
  },

  methods: {
    handleAddTask (task) {
      this.tasks.push(task)
    }
  }
}
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
