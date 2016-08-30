<template>
  <div id="app" @click.self="getLength">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <input-component type-name="text"></input-component>
    <input-component type-name="password"></input-component>
    
    <input v-model="parentMsg" class="input"/>
    <button-component msg="点击" :my-message.sync="parentMsg" v-on:buttonClick="doButtonClick"></button-component>
  </div>
</template>

<script>
import Vue from 'vue'
import Hello from './components/Hello'
import InputComponent from './components/InputComponent'

var ButtonComponent = Vue.extend({
  template: '<button v-on:click="reverseMessage($event)">{{ msg }} {{ alt }} {{ myMessage }}</button>',
  props: ['msg', 'myMessage'],
  data () {
    return {
      alt: '请点击'
    }
  },
  methods: {
    reverseMessage ($event) {
      if (this.myMessage === '') {
        return false
      }

      $event.preventDefault()
      this.myMessage = this.myMessage.split('').reverse().join('')

      // 触发父组件的操作
      this.$dispatch('buttonClick', this.myMessage)
    }
  }
})

export default {
  components: {
    Hello,
    InputComponent,
    ButtonComponent
  },
  methods: {
    getLength () {
      window.alert(this.$children.length)
    },
    doButtonClick (message) {
      alert(message)
      console.log(message + 'from button click')
    }
  },
  data () {
    return {
      'parentV': (new Date()).toString()
    }
  },
  // 监听子组件的触发操作
  events: {
  }
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
