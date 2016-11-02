export const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1)
}

export const decrementCounter = function ({ dispatch, state }) {
  dispatch('DECREMENT', 1)
}

