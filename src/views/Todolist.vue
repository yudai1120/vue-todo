<template>
   <div id="task">
     <h1 class="title">.Tasks</h1>
    <div>
      <input type="text" placeholder="What needs to be done?" v-model="newTodoName" class="form">
      <button type="submit" v-on:click="createTodo()" class="btn">Make your tasks</button>
    </div>
    <ul class="selectbtn">
      <li><button type="submit" v-on:click="showTodoType = 'all'" class="btn">All</button></li>
      <li><button type="submit" v-on:click="showTodoType = 'active'" class="btn">Active</button></li>
      <li><button type="submit" v-on:click="showTodoType = 'complete'" class="btn">Completed</button></li>
    </ul>
    <ul v-for="(todo, key) in filteredTodos" :key="key">
      <li><input class="toggle" type="checkbox" v-model="todo.isComplete" v-on:click="updateIsCompleteTodo(todo, key)">{{ todo.name }}</li>
      <li><button type="submit" v-on:click="deleteTodo(key)" class="delete-btn">Delete</button></li>
    </ul>
   </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'Todolist',
  created: function () {
    this.database = firebase.database()
    this.todosRef = this.database.ref('todos')
    var _this = this
    this.todosRef.on('value', function (snapshot) {
      _this.todos = snapshot.val() // データに変化が起きたときに再取得する
    })
  },
  computed: {
    filteredTodos: function () {
      if (this.showTodoType === 'all') {
        return this.todos
      } else {
        var showIsComplete = false
        if (this.showTodoType === 'complete') { showIsComplete = true }
        var filterTodos = {}
        for (var key in this.todos) {
          var todo = this.todos[key]
          if (todo.isComplete === showIsComplete) { filterTodos[key] = todo }
        }
        return filterTodos
      }
    }
  },
  methods: {
    createTodo: function () {
      if (this.newTodoName === '') { return }
      this.todosRef.push({
        name: this.newTodoName,
        isComplete: false
      })
      this.newTodoName = ''
    },
    updateIsCompleteTodo: function (todo, key) {
      todo.isComplete = !todo.isComplete
      var updates = {}
      updates['/todos/' + key] = todo
      this.database.ref().update(updates)
    },
    deleteTodo: function (key) {
      this.database.ref('todos').child(key).remove()
    }
  },

  data () {
    return {
      database: null,
      todosRef: null,
      newTodoName: '',
      showTodoType: 'all',
      todos: []
    }
  }
}
</script>

<style scoped>
  #task {
      color: #ffffff;
      margin-top: 100px;
  }
  .title {
    margin-bottom: 40px;
    transform: rotate(10deg);
    font-size: -webkit-xxx-large;
  }
  ul li {
    display: inline;
    font-weight: bold;
  }
  .selectbtn {
    list-style: none;
  }
  .form {
    padding: 10px 15px;
    width: 180px;
    border-radius: 3px;
    border: none;
  }
  .btn {
  padding: 15px 30px;
  border-radius: 30px;
  background-color: #4937ee;
  color: #ffffff;
  font-weight: bold;
  border: 0px solid;
  margin: 7px;
  }
  .btn:hover {
    cursor: pointer;
    background-color: #fff;
    color: #4937ee;
  }
  .btn:focus {
    outline: 0;
  }
  .delete-btn {
    padding: 5px 15px;
    border-radius: 30px;
    background-color: #4937ee;
    color: #ffffff;
    font-weight: bold;
    border: 0px solid;
    margin: 7px;
  }
</style>
