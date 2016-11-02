/**
 * Created by 20164411 on 2016/11/2.
 */
export const mutations = {
    ADD (state, list) {
        state.todoList.push(list)
    },

    REMOVE (state, index) {
        state.todoList.splice(index, 1)
    }
}