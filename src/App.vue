<template>
  <div id="app">
    <h1>Tarefas</h1>
    <task-form @addTask="handleAddTask"/>
    <task-list :tasks="tasks" />
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'

export default {
  components: { TaskList, TaskForm },
  data () {
    return {
      tasks: [{ description: 'Do the dishes', status: 'done' }]
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
