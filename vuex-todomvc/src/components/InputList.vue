<template>
    <div>
        <input type="text" @keyup.enter="addText" v-model="listValue">
    </div>
</template>

<style>
    div {
    text-align:left;
    }
    input {
        padding:5px 8px;
    }
</style>

<script>
import { add } from '../vuex/actions'
export default {
  data () {
    return {
        listValue: ''
    }
  },
  vuex: {
    actions: {
      addText: function($this) {
        add(this.$store, this.listValue);
        this.listValue = '';
      }
    }
  }
}
</script>

