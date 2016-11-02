<template>
    <div id="app">
        <Input-list></Input-list>
        <List></List>
    </div>
</template>

<script>
import InputList from './components/InputList'
import List from './components/List'
import store from './vuex/store'

export default {
  name: 'app',
  components: {
    InputList,
    List
  },
  store: store
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
