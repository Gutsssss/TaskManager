import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    }),
  ],
  state: {
    tasks: [
      {
        id:1,
        title:'one'
      },
      {
        id:2,
        title:'two'
      },
      {
        id:3,
        title:'three'
      },
    ]
  },
  getters: {
    getTasks(state) {
      return state.tasks
    }
  },
  actions: {
   addTask({commit},task) {
    commit('add_task',task)
   },
   deleteTask({commit},id) {
    commit('delete_task',id)
   },
   updateTask({commit},task) {
    commit('update_task',task)
   }
  },
  mutations: {
    add_task(state,task) {
      state.tasks.push(task)
    },
    delete_task(state,id) {
      state.tasks = state.tasks.filter(item => item.id != id)
    },
    update_task(state,task) {
      let index = state.tasks.findIndex(t => t.id === task.id)
      if(index != -1) {
        state.tasks[index] = task
      }
    }
  },
  modules: {
  },
})

