<template>
  <div id="app">
    <div>
      <h1>计数器</h1>
      <Display></Display>
      <Increment></Increment>
    </div>
  </div>
</template>

<script>
import Display from './components/Display'
import Increment from './components/Increment'
import store from './vuex/store'

export default {
  components: {
    Display,
    Increment
  },
  store: store
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

button {
  background:#ffccdd;
  padding:8px 15px;
  border:1px solid #CCC;
}
</style>
