import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        titleTask: 'Planejar desenvolvimento do app TodoList',
        done: true,
        badge: 'Urgente',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: 2,
        titleTask: 'Criar projeto Vue.js',
        done: false,
        badge: 'Importante',
        description: 'Loren'
      },
      {
        id: 3,
        titleTask: 'Montar telas HTML/CSS',
        done: false,
        badge: '',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate consequatur illum mollitia'
      },
      {
        id: 4,
        titleTask: 'Separar componentes',
        done: false,
        badge: '',
        description:
          ' reiciendis pariatur magnam neque, unde quo eos voluptatibus consequuntur dignissimo'
      },
      {
        id: 5,
        titleTask: 'Programar componentes',
        done: false,
        badge: '',
        description: 's, nihil, corrupti similique amet vel? Tenetur, unde?'
      }
    ],
    itemUpdated: ''
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done)
    },
    doneTodosCount(state, getters) {
      return getters.doneTodos.length
    },
    searchTodo: (state) => (query) => {
      return state.todos.find(
        (todo) =>
          todo.titleTask.toLowerCase.includes(query.toLowerCase()) ||
          todo.description.toLowerCase.includes(query.toLowerCase())
      )
    },
    getItemUpdated(state) {
      return state.itemUpdated
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
      //this.commit('SAVE_TODOS')
    },
    updateStatus(state, id) {
      const localIndex = state.todos.findIndex((td) => td.id == id)
      if (state.itemUpdated == state.todos[localIndex].id) {
        state.itemUpdated = -1
      }
      state.todos[localIndex].done = !state.todos[localIndex].done
    },
    deleteTodo(state) {
      const localIndex = state.todos.findIndex((td) => td.id == state.itemUpdated)
      state.todos.splice(localIndex, 1)
    },
    itemToBeUpdated(state, id) {
      state.itemUpdated = id
    }
  }
})
