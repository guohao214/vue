/**
 * Created by 20164411 on 2016/11/2.
 */
export const add = function ({dispatch}, list) {
    dispatch('ADD', list)
}

export const remove = function ({dispatch}, index) {
    dispatch('REMOVE', index)
}