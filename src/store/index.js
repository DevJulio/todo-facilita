import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    REMOVE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId)
    },
    TOGGLE_TODO(state, todoId) {
      const todo = state.todos.find((todo) => todo.id === todoId)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    removeTodo({ commit }, todoId) {
      commit('REMOVE_TODO', todoId)
    },
    toggleTodo({ commit }, todoId) {
      commit('TOGGLE_TODO', todoId)
    }
  },
  getters: {
    allTodos: (state) => state.todos,
    completedTodos: (state) => state.todos.filter((todo) => todo.completed),
    incompleteTodos: (state) => state.todos.filter((todo) => !todo.completed),
    searchTodos: (state) => (query) => {
      return state.todos.filter((todo) => todo.title.toLowerCase().includes(query.toLowerCase()))
    }
  }
})
