/**
 * Created by 20164411 on 2016/11/2.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    todoList: []
}

const mutations = {
    ADD (state, list) {
        state.todoList.push(list)
    },

    REMOVE (state, index) {
        state.todoList.splice(index, 1)
    }
}

export default new Vuex.Store({
    state,
    mutations
})



