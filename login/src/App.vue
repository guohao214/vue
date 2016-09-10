<template>
  <div id="app" @click.self="getLength">
    <img class="logo" src="./assets/logo.png">
    <hello :my-message.sync="parentMsg"></hello>
    <input-component type-name="text">账号输入:<span slot="errorMessage">账号错误</span></input-component>
    <input-component type-name="password">密码输入:<span slot="errorMessage">密码错误</span></input-component>
    <button-component>这会到哪里去呢？</button-component>
    <input v-model="parentMsg" class="input"/>
    <button-component msg="点击" :my-message.sync="parentMsg" v-on:buttonClick="doButtonClick"></button-component>

    <p></p>
    <p></p>
    
    <input type="checkbox" v-model="checked" id="checkbox">
    <label for="checkbox">{{ checked }}</label>

    <p></p>
    <p></p>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames | json }}</span>

    <p></p>
    <p></p>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>

    <select v-model="selected">
    <option value="A">A</option>
    <option value='B'>B</option>
    <option value="C">C</option>
    </select>
    <span>Selected: {{ selected }}</span>

    <p></p>
    <p></p>
    <p></p>
    <select v-model="renderSelected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected123: {{ renderSelected }}</span>

    <p></p>
    <p></p>
    <input type="text" v-model="age" debounce="500"> {{ age }}

    <h1>条件渲染</h1>
    <button v-on:click="toggleOk">切换</button>
    <h4 v-if="ok">Yes</h4>
    <h1 v-else>No</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import vueResource from 'vue-resource'
import Hello from './components/Hello'
import InputComponent from './components/InputComponent'

Vue.use(vueResource)

// 配置合并操作
// Vue.config.optionMergeStrategies.methods = function (toVal, fromVal) {
//   toVal = fromVal
// }

var mixiClick = {
  methods: {
    reverseMessage ($event) {
      $event.preventDefault()
      this.myMessage = 'guohao'
    }
  }
}

var ButtonComponent = Vue.extend({
  mixins: [mixiClick],
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

      // this.$http.get('/good.json').then(function (data) { console.log(data) }, function () { this.myMessage = 'error' })

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
      window.alert(message)
      console.log(message + 'from button click')
    },
    toggleOk () {
      this.ok = !this.ok
    }
  },
  data () {
    return {
      'parentV': (new Date()).toString(),
      'parentMsg': '我是来源',
      'checkedNames': ['Mike', 'John'],
      'selected': 'B',
      'renderSelected': 'b',
      'options': [
        { text: 'one', 'value': 'a' },
        { text: 'two', 'value': 'b' },
        { text: 'three', 'value': 'c' }
      ],
      'age': 18,
      'ok': true
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
